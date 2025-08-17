import { useState } from 'react';

export default function ServiceQuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    services: [],
    budget: '',
    timeline: '',
    projectDescription: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const { services } = prevData;
      if (checked) {
        return { ...prevData, services: [...services, value] };
      }
      return { ...prevData, services: services.filter((s) => s !== value) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, info: { error: false, msg: null } });

    try {
      const res = await fetch('/api/contact', { // Updated API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.errors ? data.errors.map((err) => err.msg).join(', ') : 'An unexpected error occurred.';
        throw new Error(errorMessage);
      }

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Your quote request has been sent successfully!' },
      });
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        services: [],
        budget: '',
        timeline: '',
        projectDescription: '',
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message },
      });
    }
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Request a Service Quote</h2>
      <p className="text-center text-xl font-normal mb-8 text-gray-600">
        Tell us about your project and we'll provide a detailed proposal
      </p>

      <form onSubmit={handleSubmit} className="border bg-white shadow-xl rounded-3xl p-8 grid grid-cols-1 gap-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input name="fullName" value={formData.fullName} onChange={handleChange} className="border rounded-2xl px-4 py-2" type="text" placeholder="Full Name" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input name="email" value={formData.email} onChange={handleChange} className="border rounded-2xl px-4 py-2" type="email" placeholder="Email Address" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Company Name</label>
            <input name="companyName" value={formData.companyName} onChange={handleChange} className="border rounded-2xl px-4 py-2" type="text" placeholder="Company Name" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border rounded-2xl px-4 py-2" type="text" placeholder="Phone Number" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-2 font-semibold text-sm">Service Interest</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm font-normal">
            {['Web Development', 'Custom Software', 'SaaS Applications', 'AI Applications', 'Managed IT', 'IT Consultancy'].map((service) => (
              <label key={service} className="flex items-center gap-1">
                <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleCheckboxChange} className="rounded-xl border border-black" />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="budget" value={formData.budget} onChange={handleChange} className="border text-sm font-normal rounded-2xl px-4 py-2" required>
            <option value="">Select budget range</option>
            <option value="<5k">Less than $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value=">20k">More than $20,000</option>
          </select>
          <select name="timeline" value={formData.timeline} onChange={handleChange} className="border text-sm font-normal rounded-2xl px-4 py-2" required>
            <option value="">Select timeline</option>
            <option value="1-2-weeks">1-2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="2-3-months">2-3 Months</option>
            <option value="3+ months">3+ Months</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Project Description</label>
          <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} className="border rounded-2xl px-4 py-2" rows="4" placeholder="Tell us about your project requirements, goals, and any specific features you need..." required></textarea>
        </div>
        
        {status.info.msg && (
            <div className={`text-center p-2 rounded-lg ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {status.info.msg}
            </div>
        )}

        <div className="flex justify-center">
          <button type="submit" disabled={status.submitting} className="w-[179px] bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold mt-2 disabled:bg-orange-300">
            {status.submitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </section>
  );
}
