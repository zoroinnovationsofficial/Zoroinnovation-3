import React, { useState, useMemo } from "react";
import { HiUser, HiBriefcase, HiCalendar, HiClock } from "react-icons/hi";
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

const DEFAULT_EMPLOYEE = {
  name: "Elon Musk",
  title: "Software Engineer",
  role: "AI Specialist",
  department: "AI Development",
  startDate: "2022-01-19",
  endDate: "2024-01-15",
  typeOfRole: "Full-time",
  profileImage:
    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
  employeeId: "ZI-2024-001",
};

const getEmployeeFields = (employeeData) => [
  {
    icon: HiUser,
    label: "Name:",
    value: employeeData.name,
    subtitle: employeeData.title,
  },
  {
    icon: HiBriefcase,
    label: "Role:",
    value: employeeData.role,
    subtitle: employeeData.department,
  },
  {
    icon: HiCalendar,
    label: "Start Date:",
    value: employeeData.startDate,
  },
  {
    icon: HiCalendar,
    label: "End Date:",
    value: employeeData.endDate,
  },
  {
    icon: HiClock,
    label: "Type of Role:",
    value: employeeData.typeOfRole,
  },
];

const EmployeeDetails = ({ employee, isVerified = true }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const employeeData = useMemo(() => employee || DEFAULT_EMPLOYEE, [employee]);

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

            <ProfileImage
              employeeData={employeeData}
              imageLoaded={imageLoaded}
              setImageLoaded={setImageLoaded}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
