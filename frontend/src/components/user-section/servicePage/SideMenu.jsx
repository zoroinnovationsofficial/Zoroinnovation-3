import React, { useEffect, useRef } from "react";

export default function SideMenu({ isOpen, onClose, title, children }) {
  const closeBtnRef = useRef();

  // Disable background scroll & focus close button
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (closeBtnRef.current) closeBtnRef.current.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-transform duration-300 ease-out translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl font-bold">{title || "Details"}</h2>
          <button
            ref={closeBtnRef}
            className="text-gray-500 hover:text-gray-800 text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
}
