import React from "react";
import { HiUser } from "react-icons/hi";

const ProfileImage = React.memo(
  ({ employeeData, imageLoaded, setImageLoaded }) => (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          {!imageLoaded && (
            <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center">
              <HiUser className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <img
            src={employeeData.profileImage}
            alt={`${employeeData.name} profile`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  )
);

ProfileImage.displayName = "ProfileImage";

export default ProfileImage;
