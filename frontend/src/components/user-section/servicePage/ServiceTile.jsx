import React from 'react';

export default function ServiceTile({ icon, title, description, onLearnMoreClick }) {
  // Show a shortened description on the card
  const truncatedDescription = description.substring(0, 100) + '...';

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-between">
      <div>
        <img src={icon} alt={`${title} Icon`} className="w-16 h-16" />
        <h3 className="font-semibold text-xl mt-8 mb-2">{title}</h3>
        <p className="text-gray-600 text-[16px] font-normal">{truncatedDescription}</p>
      </div>
      <button 
        onClick={onLearnMoreClick}
        className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md mt-4 self-start"
      >
        Learn More
      </button>
    </div>
  );
}