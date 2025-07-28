export default function ServiceProcess() {
  const steps = [
    { iconPath: "/images/Background-6.svg", title: "Discovery", desc: "Understanding your business needs and requirements" },
    { iconPath: "/images/Background-7.svg", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
    { iconPath: "/images/Background-8.svg", title: "Development", desc: "Building your solution with regular progress updates" },
    { iconPath: "/images/Background-9.svg", title: "Testing", desc: "Rigorous quality assurance and performance testing" },
    { iconPath: "/images/Background-10.svg", title: "Launch", desc: "Deployment and ongoing support for your success" },
  ];

  return (
    <section className="border bg-white py-12 px-4 max-w-full mx-auto">
      
        <h2 className="text-4xl font-bold text-center">Our Service Process</h2>
        <p className="text-center text-xl font-normal mb-0 mt-4 text-gray-600">A structured approach to delivering exceptional results</p>

        <div className="mt-[70px] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center flex-1">
              
                <img src={step.iconPath} alt={step.title} className="w-16 h-16" />
              
              <div className="font-semibold mt-4 mb-1">{step.title}</div>
              <div className="text-sm w-[180px] text-gray-600 text-center">{step.desc}</div>
              
            </div>
          ))}
        </div>
      
    </section>
  );
}
