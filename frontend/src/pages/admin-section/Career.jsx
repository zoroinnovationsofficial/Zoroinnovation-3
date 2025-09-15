import React, { useState, useEffect } from "react";
import search from "../../assets/Searchicon.svg";

// ✅ Use API base URL from .env (your .env already has VITE_API_URL)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

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

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // 🔹 Fetch jobs from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/admin/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

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
      await fetch(`${API_BASE_URL}/admin/jobs/${id}`, {
        method: "DELETE",
      });
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // 🔄 Toggle status
  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const updatedStatus = currentStatus === "Open" ? "Closed" : "Open";
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: updatedStatus }),
      });
      if (res.ok) {
        setJobs((prev) =>
          prev.map((job) =>
            job._id === id ? { ...job, status: updatedStatus } : job
          )
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // ✏️ Save edit
  const handleSaveEdit = async (updatedJob) => {
    try {
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${updatedJob._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedJob),
      });
      if (res.ok) {
        setJobs((prev) =>
          prev.map((job) => (job._id === updatedJob._id ? updatedJob : job))
        );
        setEditingJob(null);
      }
    } catch (err) {
      console.error("Error saving edit:", err);
    }
  };

  // ➕ Add new job
  const handleAddJob = async () => {
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.date) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/admin/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });
      const savedJob = await res.json();
      setJobs((prev) => [...prev, savedJob]);
      setNewJob({ title: "", department: "", location: "", status: "Open", date: "" });
      setNewJobModal(false);
    } catch (err) {
      console.error("Error adding job:", err);
    }
  };

  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Job Postings</h1>
      <p className="text-md text-white my-2">Manage current job openings and create new ones.</p>

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
                <tr key={job._id} className="border-b-2 border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-4 px-4 font-medium">{job.title}</td>
                  <td className="py-4 px-4 text-blue-500 underline">{job.department}</td>
                  <td className="py-4 px-4 text-blue-500 underline">{job.location}</td>
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
                    <button className="hover:underline" onClick={() => setEditingJob(job)}>
                      Edit
                    </button>
                    <span>|</span>
                    <button className="hover:underline text-red-600" onClick={() => handleDelete(job._id)}>
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
    </div>
  );
};

export default Careers;
