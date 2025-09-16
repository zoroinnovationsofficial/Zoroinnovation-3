import React, { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

const CareersUser = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/admin/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data.filter((job) => job.status === "Open")))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div>
      <h1>Available Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareersUser;