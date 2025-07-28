export default function TrackRecord() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Our Track Record</h2>
      <p className="text-center text-xl font-normal mb-8 text-gray-600">Proven results across all service categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Success Rate Pie Chart */}
        <div className="flex flex-col items-center">
          <div className="text-center text-gray-700 text-2xl font-semibold">Project Success Rate</div>
          <img
            src="/images/image.png"
            alt="Project Success Rate"
            width={584}
            height={320}
            className="mb-2"
          />
          
        </div>

        {/* Client Satisfaction Bar Chart */}
        <div className="flex flex-col items-center">
          <div className="text-center text-gray-700 text-2xl font-semibold">Client Satisfaction by Service</div>
          <img
            src="/images/image1.png"
            alt="Client Satisfaction by Service"
            width={584}
            height={320}
            className="mb-2"
          />
          
        </div>
      </div>
    </section>
  );
}
