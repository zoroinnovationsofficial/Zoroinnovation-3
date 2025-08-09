import React from 'react';
import Footer from '../components/loginPage/LoginFooter';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    client: "Global Retail Corp",
    image: "/ProjectImages/analytics.png",
    progress: 75,
    dueDate: "2024-08-15",
    completed: false,
  },
  {
    title: "Smart Home Automation System",
    client: "Tech Startup Inc",
    image: "/ProjectImages/smart-home.png",
    progress: 100,
    dueDate: "2024-05-20",
    completed: true,
  },
  {
    title: "Predictive Maintenance Software",
    client: "Industrial Solutions Ltd",
    image: "/ProjectImages/maintainance.png",
    progress: 25,
    dueDate: "2024-11-30",
    completed: false,
  },
  {
    title: "Custom CRM Development",
    client: "Business Growth Partners",
    image: "/ProjectImages/crm.png",
    progress: 60,
    dueDate: "2024-09-22",
    completed: false,
  },
  {
    title: "Mobile App for Healthcare",
    client: "Health Innovations LLC",
    image: "/ProjectImages/healthcare.png",
    progress: 100,
    dueDate: "2024-04-10",
    completed: true,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-orange-300 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 mt-20">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <div className="w-full sm:w-1/2 bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6">
            <img
              src="/ProjectImages/team.png"
              alt="Team"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1 mb-4">
              Manage your projects efficiently and effectively.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
              New Project
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search projects"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none bg-gray-100"
          />
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
         className="bg-white rounded-xl shadow border border-gray-200 p-4 space-y-4"

            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-500 mb-10">
                    Client: {project.client}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button className="px-3 py-1 text-sm border font-bold rounded-full bg-gray-100 hover:bg-gray-200">
                      View Project
                    </button>
                    <button className="px-3 py-1 text-sm border rounded-full font-bold bg-gray-100 hover:bg-gray-200">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="w-fit rounded-lg overflow-hidden">
                  <div className="flex justify-end mb-2">
                    <button className="px-3 py-1 text-sm border rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                      Edit
                    </button>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[475px] h-[165px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Progress Section */}
              <div className="text-sm text-gray-600">
                <div className="mb-1">Progress</div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-1.5"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>
                    {project.completed
                      ? `Completed: ${project.dueDate}`
                      : `Due Date: ${project.dueDate}`}
                  </span>
                  <span className="text-orange-500 font-semibold">
                    {project.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Projects;
