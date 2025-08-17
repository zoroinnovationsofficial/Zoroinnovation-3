import React from "react";

// The component now receives its state and content via props
export default function SideMenu({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null; // Don't render anything if it's not open
  }
  
  return (
    // Main container: Covers the screen and centers the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose} // Close the modal if the background is clicked
    >
      {/* Modal Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-all"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl font-bold">{title || 'Details'}</h2>
          <button
            className="text-gray-500 hover:text-gray-800 text-3xl leading-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Dynamic Modal Content */}
        <div className="py-4">
          {children}
        </div>
      </div>
    </div>
  );
}