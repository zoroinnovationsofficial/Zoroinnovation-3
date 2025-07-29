import React, { useState, useMemo } from "react";
import { HiUser, HiBriefcase, HiCalendar } from "react-icons/hi";
import EmployeeField from "./employee/EmployeeField";
import VerificationHeader from "./employee/VerificationHeader";
import EmployeeIDSection from "./employee/EmployeeIDSection";
import ProfileImage from "./employee/ProfileImage";

const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }
`;

const getEmployeeFields = (employeeData) => [
  {
    icon: HiUser,
    label: "Name:",
    value: employeeData.name,
    subtitle: employeeData.designation,
  },
  {
    icon: HiBriefcase,
    label: "Department:",
    value: employeeData.department,
    subtitle: "Zoro Innovations",
  },
  {
    icon: HiCalendar,
    label: "Joining Date:",
    value: employeeData.joiningDate,
  },
];

const EmployeeDetails = ({ employee, isVerified = true }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!employee) {
    return null;
  }

  const employeeData = employee;

  const employeeFields = useMemo(
    () => getEmployeeFields(employeeData),
    [employeeData]
  );

  const currentDate = useMemo(() => new Date().toLocaleDateString(), []);

  return (
    <>
      <style>{animationStyles}</style>
      <div className="max-w-7xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white">
        <VerificationHeader isVerified={isVerified} />

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Employee Details
                </h3>
                <p className="text-gray-600">
                  Verified details for {employeeData.name}
                </p>
              </div>

              {employeeFields.map((field, index) => (
                <div
                  key={`${field.label}-${index}`}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <EmployeeField {...field} />
                </div>
              ))}

              <EmployeeIDSection employeeId={employeeData.employeeId} />
            </div>

            <div className="bg-gray-50 p-8 flex flex-col justify-between">
              <ProfileImage
                employeeData={employeeData}
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
              />
              <EmployeeIDSection
                employeeId={employeeData.employeeId}
                currentDate={currentDate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
