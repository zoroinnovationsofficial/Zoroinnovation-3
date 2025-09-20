import React, { useState, useEffect } from "react";
import search from "../../assets/Searchicon.svg";

// ✅ Use API base URL from .env

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingJob, setEditingJob] = useState(null);
  const [newJobModal, setNewJobModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    status: "Open",
    date: "",
  });
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // 🔹 Fetch jobs from backend
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token"); // Adjust if using context/auth library
      const res = await fetch(`${API_BASE_URL}/admin/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError("Failed to load jobs: " + err.message);
      console.error("Error fetching jobs:", err);
    }
  };

  // 🔍 Filter jobs
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📄 Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // 🗑 Delete job
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete job");
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      setError("Failed to delete job: " + err.message);
      console.error("Error deleting job:", err);
    }
  };

  // 🔄 Toggle status
  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const updatedStatus = currentStatus === "Open" ? "Closed" : "Open";
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: updatedStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setJobs((prev) =>
        prev.map((job) =>
          job._id === id ? { ...job, status: updatedStatus } : job
        )
      );
    } catch (err) {
      setError("Failed to update status: " + err.message);
      console.error("Error updating status:", err);
    }
  };

  // ✏️ Save edit
  const handleSaveEdit = async (updatedJob) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${updatedJob._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedJob),
      });
      if (!res.ok) throw new Error("Failed to save edit");
      setJobs((prev) =>
        prev.map((job) => (job._id === updatedJob._id ? updatedJob : job))
      );
      setEditingJob(null);
    } catch (err) {
      setError("Failed to save edit: " + err.message);
      console.error("Error saving edit:", err);
    }
  };

  // ➕ Add new job
  const handleAddJob = async () => {
    if (
      !newJob.title ||
      !newJob.department ||
      !newJob.location ||
      !newJob.date
    ) {
      setError("Please fill all fields!");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/admin/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `HTTP ${res.status}: ${errorText || "Job failed to add"}`
        );
      }
      const savedJob = await res.json();
      setJobs((prev) => [...prev, savedJob]);
      setNewJob({
        title: "",
        department: "",
        location: "",
        status: "Open",
        date: "",
      });
      setNewJobModal(false);
      setError("");
    } catch (err) {
      setError("Job failed to add: " + err.message);
      console.error("Error adding job:", err);
    }
  };

  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Job Postings</h1>
      <p className="text-md text-white my-2">
        Manage current job openings and create new ones.
      </p>

      {/* 🔍 Search */}
      <div className="flex items-center gap-3 my-6 w-full">
        <div className="flex w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <button className="px-1 text-gray-700">
            <img src={search} alt="search" className="w-6 sm:w-8 px-2" />
          </button>
          <input
            type="text"
            placeholder="Search job titles or departments"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-2 py-2 outline-none text-md placeholder:text-gray-600 text-black"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-100 bg-red-600 p-2 mb-4 rounded">{error}</div>
      )}

      {/* Jobs Table */}
      <div className="hidden md:block w-full mx-auto bg-white rounded-3xl shadow-lg text-black p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead>
              <tr className="text-black font-bold border-b-2 border-gray-200">
                <th className="py-3 px-4">Job Title</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Posted Date</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job) => (
                <tr
                  key={job._id}
                  className="border-b-2 border-gray-200 hover:bg-gray-100 transition-all"
                >
                  <td className="py-4 px-4 font-medium">{job.title}</td>
                  <td className="py-4 px-4 text-blue-500 underline">
                    {job.department}
                  </td>
                  <td className="py-4 px-4 text-blue-500 underline">
                    {job.location}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        job.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">{job.date}</td>
                  <td className="py-4 px-4 text-sm text-blue-600 space-x-2">
                    <button
                      className="hover:underline"
                      onClick={() => setEditingJob(job)}
                    >
                      Edit
                    </button>
                    <span>|</span>
                    <button
                      className="hover:underline text-red-600"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>
                    <span>|</span>
                    <button
                      className="hover:underline text-indigo-600"
                      onClick={() => handleToggleStatus(job._id, job.status)}
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination + Create */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? "bg-white text-black font-bold"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setNewJobModal(true)}
          className="bg-white text-orange-600 font-bold px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
        >
          Create New Job
        </button>
      </div>

      {/* Modal for New Job (Assumed Structure - Add Your Modal JSX Here) */}
      {newJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add New Job</h2>
            <input
              type="text"
              placeholder="Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="text"
              placeholder="Department"
              value={newJob.department}
              onChange={(e) =>
                setNewJob({ ...newJob, department: e.target.value })
              }
              className="w-full p-2 mb-2 border"
            />
            <input
              type="text"
              placeholder="Location"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              className="w-full p-2 mb-2 border"
            />
            <input
              type="date"
              value={newJob.date}
              onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
              className="w-full p-2 mb-2 border"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleAddJob}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setNewJobModal(false);
                  setError("");
                }}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
