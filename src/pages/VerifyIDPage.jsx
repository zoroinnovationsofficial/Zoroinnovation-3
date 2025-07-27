import React, { useState } from "react";
import VerifySectionHeader from "../components/verifyID/VerifySectionHeader.jsx";
import EmployeeDetails from "../components/verifyID/EmployeeDetails.jsx";
import FAQs from "../components/verifyID/FAQs.jsx";
import { verifyEmployee } from "../api/verify.js";
import Shimmer from "../components/verifyID/Shimmer.jsx";

const VerifyIDPage = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async (employeeId) => {
    setIsLoading(true);
    setError(null);
    setEmployeeData(null);
    try {
      const data = await verifyEmployee(employeeId);
      setEmployeeData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <VerifySectionHeader onVerify={handleVerify} />
      {isLoading && <Shimmer />}
      {error && <p className="text-center py-4 text-red-500">{error}</p>}
      {employeeData && <EmployeeDetails employee={employeeData} />}
      <FAQs />
    </>
  );
};

export default VerifyIDPage;
