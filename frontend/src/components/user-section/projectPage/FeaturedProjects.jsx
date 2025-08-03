import React from 'react';
import PropTypes from 'prop-types';

function FeaturedProjects({ projectTabs, activeTab, setActiveTab, filteredProjects }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital solutions across industries — delivering real impact through web, AI, SaaS, and IT innovation.
          </p>
        </div>
        {/* Project Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 w-full relative">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FeaturedProjects.propTypes = {
  projectTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  filteredProjects: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedProjects;
