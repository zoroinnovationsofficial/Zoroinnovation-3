import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectTabs from './ProjectTabs';
import ProjectCard from './ProjectCard';

function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const filteredProjects = activeTab === 'All Projects' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital solutions across industries — delivering real impact through web, AI, SaaS, and IT innovation.
          </p>
        </div>
        <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
