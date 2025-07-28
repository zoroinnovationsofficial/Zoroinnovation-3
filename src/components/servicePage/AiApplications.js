export default function AiApplications() {
  return (
    <section className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Side */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/AI Applications.png"
            alt="AI illustration of machine learning applications"
            className="w-[584px] h-[480px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content Side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold leading-tight">AI Applications & Machine Learning</h2>
          <p className="text-white/90 leading-relaxed">
            Harness the power of artificial intelligence to automate processes, gain insights,
            and create intelligent solutions that adapt and learn.
          </p>

          <ul className="list-none space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-lg text-orange-500 mt-[2px]">✔</span>
              <span><span className="font-semibold">Natural Language Processing</span>: Chatbots, sentiment analysis, and text processing solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg text-blue-300 mt-[2px]">✔</span>
              <span><span className="font-semibold">Computer Vision</span>: Image recognition, object detection, and visual analytics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg text-blue-300 mt-[2px]">✔</span>
              <span><span className="font-semibold">Predictive Analytics</span>: Forecasting models and data-driven decision making</span>
            </li>
          </ul>

          <div className="bg-orange-500/10 rounded-xl p-4 text-sm">
  <p className="italic mb-1 text-[16px] font-normal text-gray-200 leading-relaxed">
    “The AI solution reduced our processing time by 85% and improved accuracy to 99.2%. It’s been transformational for our operations.”
  </p>
  <div className="flex items-center gap-2 font-semibold mt-2">
    <img
      src="/images/Background-11.svg"
      alt="Sarah Chen"
      className="w-6 h-6 rounded-full object-cover"
    />
    <span>Sarah Chen</span>
  </div>
  <div className="text-blue-200">CTO, DataWare Industries</div>
</div>

        </div>
      </div>
    </section>
  );
}
