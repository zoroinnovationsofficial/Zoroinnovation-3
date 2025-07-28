export default function SuccessStories() {
  return (
    <section className="bg-white py-12 px-4 max-w-full mx-auto justify-items-center">
      <h2 className="text-4xl font-bold text-center mb-2">Success Stories</h2>
      <p className="text-center mb-20 text-xl font-normal text-gray-600">
        Real results from real clients across different industries
      </p>

      <div className="w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {/* E-commerce Platform Transformation */}
        <div className="bg-purple-100 rounded-3xl shadow-md p-6 flex flex-col items-start w-[384px] h-[452px]">
          <img
            src="/images/Background-12.svg"
            alt="E-commerce Icon"
            className="w-16 h-16 mb-4 object-contain"
          />
          <div className="font-semibold text-[20px] leading-[28px] tracking-normal">E-commerce Platform Transformation</div>
          <div className="text-gray-600 mb-2 mt-3 text-[16px] leading-[24px] font-normal">
            Complete redesign and development of a multi-vendor marketplace platform serving over 50,000 users.
          </div>
          <ul className="text-gray-700 mb-2 mt-5 space-y-1 w-full">
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Revenue Increase</span>
              <span className="font-bold text-green-600 text-right">+340%</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Page Load Speed</span>
              <span className="font-bold text-green-600 text-right">+65%</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>User Engagement</span>
              <span className="font-bold text-green-600 text-right">+180%</span>
            </li>
          </ul>
          <div className="text-xs text-gray-500 mt-auto font-normal text-[14px] leading-[20px]">RealTech Solutions · 6 months</div>
        </div>

        {/* AI-Powered Analytics Platform */}
        <div className="bg-green-100 rounded-3xl shadow-md p-6 flex flex-col items-start w-[384px] h-[452px]">
          <img
            src="/images/Background-13.svg"
            alt="Analytics Icon"
            className="w-16 h-16 mb-4 object-contain"
          />
          <div className="font-semibold text-[20px] leading-[28px] tracking-normal">AI-Powered Analytics Platform</div>
          <div className="text-gray-600 mb-2 mt-3 text-[16px] leading-[24px] font-normal">
            Custom machine learning solution for predictive maintenance in manufacturing operations.
          </div>
          <ul className="text-gray-700 mb-2 mt-5 space-y-2 w-full leading-[28px]">
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Downtime Reduction</span>
              <span className="font-bold text-green-600 text-right">-78%</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Cost Savings</span>
              <span className="font-bold text-green-600 text-right">$2.4M</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Accuracy Rate</span>
              <span className="font-bold text-green-600 text-right">99.2%</span>
            </li>
          </ul>
          <div className="text-xs text-gray-500 mt-auto font-normal text-[14px] leading-[20px]">Industrial Dynamics Corp · 8 months</div>
        </div>

        {/* Healthcare Management System */}
        <div className="bg-orange-100 rounded-3xl shadow-md p-6 flex flex-col items-start w-[384px] h-[452px]">
          <img
            src="/images/Background-14.svg"
            alt="Healthcare Icon"
            className="w-16 h-16 mb-4 object-contain"
          />
          <div className="font-semibold text-[20px] leading-[28px] tracking-normal">Healthcare Management System</div>
          <div className="text-gray-600 mb-2 mt-3 text-[16px] leading-[24px] font-normal">
            Comprehensive patient management and telemedicine platform for a regional healthcare network.
          </div>
          <ul className="text-gray-700 mb-2 mt-5 space-y-1 w-full">
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Patient Satisfaction</span>
              <span className="font-bold text-green-600 text-right">+95%</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Processing Time</span>
              <span className="font-bold text-green-600 text-right">-60%</span>
            </li>
            <li className="flex w-full justify-between text-[16px] leading-[24px]">
              <span>Cost Efficiency</span>
              <span className="font-bold text-green-600 text-right">+45%</span>
            </li>
          </ul>
          <div className="text-xs text-gray-500 mt-auto font-normal text-[14px] leading-[20px]">MediCare Network · 10 months</div>
        </div>
      </div>
    </section>
  );
}
