export default function ServiceQuoteForm() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Request a Service Quote</h2>
      <p className="text-center text-xl font-normal mb-8 text-gray-600">
        Tell us about your project and we'll provide a detailed proposal
      </p>

      <form className="border bg-white shadow-xl rounded-3xl p-8 grid grid-cols-1 gap-4 mx-auto">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input className="border rounded-2xl px-4 py-2" type="text" placeholder="Full Name" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input className="border rounded-2xl px-4 py-2" type="email" placeholder="Email Address" />
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Company Name</label>
            <input className="border rounded-2xl px-4 py-2" type="text" placeholder="Company Name" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input className="border rounded-2xl px-4 py-2" type="text" placeholder="Phone Number" />
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <div className="mb-2 font-semibold text-sm">Service Interest</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm font-normal">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              Web Development
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              Custom Software
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              SaaS Applications
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              AI Applications
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              Managed IT
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="rounded-xl border border-black" />
              IT Consultancy
            </label>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border text-sm font-normal rounded-2xl px-4 py-2">
            <option>Select budget range</option>
          </select>
          <select className="border text-sm font-normal rounded-2xl px-4 py-2">
            <option>Select timeline</option>
          </select>
        </div>

        {/* Message Box */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Project Description</label>
            <textarea
              className="border rounded-2xl px-4 py-2"
              rows="4"
             placeholder="Tell us about your project requirements, goals, and any specific features you need..."
            ></textarea>
        </div>
        {/* Centered Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-[179px] bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold mt-2"
            type="submit"
          >
            Submit Request
          </button>
        </div>
      </form>
    </section>
  );
}
