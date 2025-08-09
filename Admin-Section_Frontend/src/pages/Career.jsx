import React from "react";
import search from "../assets/Dashboard-Career/searchLogo.png"; 

const jobs = [
  {
    title: "AI Research Scientist",
    department: "Research and Development",
    location: "Remote",
    status: "Open",
    date: "2023-11-15",
  },
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    status: "Open",
    date: "2023-11-10",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    status: "Closed",
    date: "2023-10-20",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    status: "Open",
    date: "2023-10-15",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Chicago, IL",
    status: "Closed",
    date: "2023-09-30",
  },
];

const Careers = () => {
  return (
        <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-6">
        {/* Header */}
 <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Times New Roman', serif" }}>
  Job Postings
</h1>


        <p className="text-md text-white my-2">
          Manage current job openings and create new ones.
        </p>

        {/* Search */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex w-full bg-white rounded-lg overflow-hidden">
            <button className="px-1 text-gray-700">
              <img src={search} alt="" className="w-10 px-2" />
            </button>
            <input
              type="text"
              placeholder="Search job titles or departments"
              className="w-full px-2 py-2 outline-none text-md placeholder:text-black text-black"
            />
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 py-2 my-4">
          {["All Departments", "All Locations", "Open Positions"].map((label) => (
            <button
              key={label}
              className="bg-white text-black px-4 py-1 rounded-full text-md hover:bg-gray-200"
            >
              {label}
            </button>
          ))}
        </div>

      <div className="w-full mx-auto bg-white rounded-3xl shadow-lg text-black p-2">
        {/* Table */}
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead>
              <tr className="text-black font-bold border-b-2 border-gray-200 py-2">
                <th className="py-2 px-4">Job Title</th>
                <th className="py-2 px-4">Department</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Posted Date</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr
                  key={idx}
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
                  <td className="py-4 px-4 text-md text-blue-600 space-x-2">
                    <button className="hover:underline">Edit</button>
                    <span>|</span>
                    <button className="hover:underline text-red-600">
                      Delete
                    </button>
                    <span>|</span>
                    <button className="hover:underline text-indigo-600">
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <button>

            </button>
            {[1, 2, 3, "...", 10].map((num, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded-full ${
                  num === 1
                    ? "bg-white text-black font-bold"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-white text-orange-600 font-bold px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
            Create New Job
          </button>
        </div>
    </div>
  );
};

export default Careers;
