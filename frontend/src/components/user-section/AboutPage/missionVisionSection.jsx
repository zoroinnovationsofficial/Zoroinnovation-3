import React from "react";
import MissionVisionCard from "./visionCard";
import MissionIcon from "../../../assets/about/Overlay.svg";
import VisionIcon from "../../../assets/about/Overlay-1.svg";

const MissionVisionSection = () => {
  return (
    <section className="bg-gray-50" style={{ height: "546.26px" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div
          className="max-w-[1280px] mx-auto h-full flex flex-col justify-center"
          style={{ paddingTop: "64px", paddingBottom: "64px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We are driven by a clear purpose and guided by strong values that
              shape everything we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1280px] mx-auto">
            <div className="flex justify-center">
              <MissionVisionCard
                svg={MissionIcon}
                iconBgGradient="bg-gradient-to-br from-blue-500 to-indigo-600"
                title="Our Mission"
                content="To empower individuals and businesses to achieve financial security and prosperity through personalized advisory services, innovative solutions, and unwavering commitment to their success."
              />
            </div>

            <div className="flex justify-center">
              <MissionVisionCard
                svg={VisionIcon}
                iconBgGradient="bg-gradient-to-br from-purple-500 to-pink-500"
                title="Our Vision"
                content="To be the most trusted financial advisory firm, recognized for our expertise, integrity, and the lasting positive impact we create in our clients' lives and communities."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
