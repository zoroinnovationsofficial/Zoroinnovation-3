import React from "react";
import IntegrityIcon from "../../../assets/about/Overlay-2.svg";
import ExcellenceIcon from "../../../assets/about/Overlay-3.svg";
import ClientCentricIcon from "../../../assets/about/Overlay-4.svg";
import InnovationIcon from "../../../assets/about/Overlay-5.svg";
import CollaborationIcon from "../../../assets/about/Overlay-6.svg";
import SustainabilityIcon from "../../../assets/about/Overlay-7.svg";

const CoreValueSection = () => {
  const coreValues = [
    {
      svg: IntegrityIcon,
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty in all our client relationships and business practices.",
    },
    {
      svg: ExcellenceIcon,
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      title: "Excellence",
      description:
        "We continuously strive for the highest standards in service delivery and professional expertise.",
    },
    {
      svg: ClientCentricIcon,
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      title: "Client-Centric",
      description:
        "Every decision we make is guided by what's best for our clients' financial well-being and success.",
    },
    {
      svg: InnovationIcon,
      iconBg: "bg-gradient-to-br from-blue-500 to-purple-600",
      title: "Innovation",
      description:
        "We embrace new technologies and methodologies to provide cutting-edge financial solutions.",
    },
    {
      svg: CollaborationIcon,
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      title: "Collaboration",
      description:
        "We work together as a unified team to deliver comprehensive solutions for our clients.",
    },
    {
      svg: SustainabilityIcon,
      iconBg: "bg-gradient-to-br from-blue-600 to-purple-600",
      title: "Sustainability",
      description:
        "We are committed to responsible business practices and sustainable growth for our community.",
    },
  ];

  return (
    <section className="bg-white" style={{ height: "743.77px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div
          className="h-full flex flex-col justify-center"
          style={{ paddingTop: "64px", paddingBottom: "64px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our decisions and define our
              culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <img
                    src={value.svg}
                    alt={value.title}
                    className="w-16 h-16"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
