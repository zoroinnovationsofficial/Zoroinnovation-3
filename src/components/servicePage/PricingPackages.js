import { getServices } from '../services/api';
export default function PricingPackages() {
  return (
    <section className="px-8 py-20 mx-auto mt-20">
      <h2 className="text-[36px] font-bold text-center mb-2">Service Packages & Pricing</h2>
      <p className="text-center text-[20px] mb-8 text-gray-600">Choose the perfect package for your business needs</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Package */}
        <div className="border-4 border-transparent hover:border-orange-500 rounded-3xl shadow-md p-8 flex flex-col items-center w-[384px] h-[475.2px]">
          <div className="font-bold text-[24px] mb-2">Starter</div>
          <div className="text-3xl font-bold text-orange-500 mb-2">$15,000</div>
          <div className="mb-4 text-gray-600 text-sm text-center">Perfect for small businesses</div>
          <ul className="text-gray-700 text-sm mb-6 space-y-6 text-left">
          {[
              "Basic web application",
              "Responsive design",
              "Basic SEO optimization",
              "3 months support",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2 leading-6">
                <img src="/images/Overlay.png" alt="check" className="w-4 h-4 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-gray-300 hover:bg-orange-600  text-black px-6 py-2 rounded-md w-80 font-semibold">Get Started</button>
        </div>
        {/* Professional Package */}
        <div className="border-4 border-orange-500 rounded-3xl shadow-md p-8 flex flex-col items-center w-[384px] h-[475.2px]">
          <div className="font-bold text-[24px] mb-2">Professional</div>
          <div className="text-3xl font-bold text-orange-500 mb-2">$15,000</div>
          <div className="mb-4 text-gray-600 text-sm text-center">Ideal for growing companies</div>
          <ul className="text-gray-700 text-sm mb-6 space-y-6 text-left">
          {[
              "Advanced web application",
              "Custom features & integrations",
              "Performance optimization",
              "6 months support",
              "Analytics & reporting",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2 leading-6">
                <img src="/images/Overlay.png" alt="check" className="w-4 h-4 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-orange-300 hover:bg-orange-600 text-black px-6 py-2 w-80 rounded-md font-semibold">Get Started</button>
        </div>
        {/* Enterprise Package */}
        <div className="border-4 border-transparent hover:border-orange-500 rounded-3xl shadow-md p-8 flex flex-col items-center w-[384px] h-[475.2px]">
          <div className="font-bold text-[24px] mb-2">Enterprise</div>
          <div className="text-3xl font-bold text-orange-500 mb-2">$35,000+</div>
          <div className="mb-4 text-gray-600 text-sm text-center">For large organizations</div>
          <ul className="text-gray-700 text-sm mb-6 space-y-6 text-left">
          {[
              "Complex web platform",
              "Multi-system integrations",
              "Scalable architecture",
              "12 months support",
              "Dedicated project manager",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2 leading-6">
                <img src="/images/Overlay.png" alt="check" className="w-4 h-4 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-gray-300 hover:bg-orange-600 text-black px-6 py-2 rounded-md font-semibold w-80">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
