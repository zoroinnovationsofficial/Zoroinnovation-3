import React, { useState } from 'react';
// Assuming 'sendContactMessage' is available at this path relative to the component
// NOTE: Adjust the path below if 'sendContactMessage' is located elsewhere for this version
import { sendContactMessage } from "../../../api/contactApi.js"; 

const ContactForm = () => {
  // 1. Define initial state for form data, loading, and status
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'success' or 'error'

  // 2. Define handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Define handleSubmit function - CONNECTING TO THE API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      // 🚀 Replacing the simulated call with the actual API call 🚀
      const result = await sendContactMessage(formData); 
      console.log("Message submitted successfully:", result);

      // Handle successful submission
      setStatus({
        message: 'Message sent successfully! We will be in touch soon.',
        type: 'success',
      });
      setFormData({ name: '', city: '', email: '', message: '' }); // Clear form

    } catch (error) {
      // Handle potential submission error
      console.error("Error submitting message:", error);
      setStatus({
        type: 'error',
        // Use the error message from the API if available, otherwise use a generic one
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12">
        {/* Contact Info - Left Section */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-4xl text-gray-900 font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-10">
            Ready to start your next project? Contact us today and let's discuss how we can help transform your business.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-9.svg" alt="Email icon" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-900"><strong>Email:</strong></p>
                <p className="text-sm text-gray-600">zoroinnovations@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-10.svg" alt="Phone icon" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-900"><strong>Phone:</strong></p>
                <p className="text-sm text-gray-600">+919481414295</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-11.svg" alt="Address icon" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-900"><strong>Address:</strong></p>
                <p className="text-sm text-gray-600">#117 Reddys Colony Street,Thondebhavi, Gowribidanuru Taluk, Chikkaballapur District, KA 561213</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form (Tailwind classes applied) */}
        <div className="flex-1 p-8 bg-white rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Your City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals or concerns..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? "Sending..." : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="white" strokeWidth="2" />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {/* Status Message */}
            {status.message && (
              <p
                className={`mt-3 text-sm font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
