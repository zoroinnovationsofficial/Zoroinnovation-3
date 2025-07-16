import React from "react";

const MissionVisionCard = ({ icon: Icon, iconBgGradient, title, content }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-[274px] w-full max-w-[608px]">
      <div
        className={`w-16 h-16 ${iconBgGradient} rounded-2xl flex items-center justify-center mb-6`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 text-base leading-6 font-normal">{content}</p>
    </div>
  );
};

export default MissionVisionCard;
