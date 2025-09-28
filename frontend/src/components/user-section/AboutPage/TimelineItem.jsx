import React from "react";

const TimelineItem = ({ year, title, description, isFuture }) => {
  return (
    <div className="flex items-start space-x-8">
      {/* 1. Removed the <img> tag completely to eliminate the green square/image dependency.
        2. Used a <div> to create the marker.
        3. Used 'flex items-center justify-center' for perfect centering of the text.
      */}
      <div className="relative z-10">
        <div
          className={`
            w-16 h-16 rounded-full 
            ${isFuture ? "bg-gray-400" : "bg-orange-500"} 
            text-white font-bold text-xl 
            flex items-center justify-center 
            flex-shrink-0 
            -mt-1 // Adjusted margin-top to better align the circle with the content
          `}
        >
          {year}
        </div>
      </div>
      
      {/* The content section remains mostly the same, now correctly aligned */}
      <div className="flex-1 pt-0"> 
        {isFuture ? (
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
