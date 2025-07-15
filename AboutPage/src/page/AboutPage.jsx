import React from "react";
import Navbar from "../component/section/Navbar";
import SectionHeader from "../component/section/sectionHeader";
import OurStorySection from "../component/section/ourMissionSection";
import MissionVisionSection from "../component/section/missionVisionSection";
import CoreValueSection from "../component/section/coreValueSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SectionHeader />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValueSection />
      <main></main>
    </div>
  );
};

export default AboutPage;
