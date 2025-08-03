import React, { useMemo } from "react";
import "./EmployeeDetails.css";

const EmployeeDetails = ({ employeeData, isVerified }) => {
  // Always call hooks unconditionally
  const processedDetails = useMemo(() => {
    if (!employeeData) return null;

    const fullName = `${employeeData.firstName} ${employeeData.lastName}`;
    const maskedEmail = employeeData.email.replace(/(.{2})(.*)(?=@)/, (_, a, b) => {
      return a + "*".repeat(b.length);
    });

    return {
      fullName,
      maskedEmail,
      department: employeeData.department || "N/A",
    };
  }, [employeeData]);

  if (!processedDetails) {
    return <p>Loading employee data...</p>;
  }

  return (
    <div className={`employee-card ${isVerified ? "verified" : "unverified"}`}>
      <h2>{processedDetails.fullName}</h2>
      <p>Email: {processedDetails.maskedEmail}</p>
      <p>Department: {processedDetails.department}</p>
      {isVerified && <span className="verified-badge">Verified</span>}
    </div>
  );
};

export default EmployeeDetails;
