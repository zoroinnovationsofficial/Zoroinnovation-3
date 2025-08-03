import React from 'react';

const DigitalResources = () => {
  return (
    <section className="digital-resources">
      <div className="container">
        <div className="header">
          <h2>Digital Resources</h2>
          <p>Explore our latest insights, guides, and tools to help you make smarter technology decisions and drive innovation.</p>
        </div>
        
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-image">
              <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Building Scalable Web Applications" />
            </div>
            <div className="resource-content">
              <span className="resource-type">Guide</span>
              <h3>Building Scalable Web Applications</h3>
              <p>Learn the key steps to create a secure and comfortable retirement plan tailored to your needs.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="resource-card">
            <div className="resource-image">
              <img src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Securing Your Digital Infrastructure" />
            </div>
            <div className="resource-content">
              <span className="resource-type">Article</span>
              <h3>Securing Your Digital Infrastructure</h3>
              <p>Discover key strategies to protect your applications, data, and users from modern cybersecurity threats.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="resource-card">
            <div className="resource-image">
              <img src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Future-Proofing with AI & Automation" />
            </div>
            <div className="resource-content">
              <span className="resource-type">Webinar</span>
              <h3>Future-Proofing with AI & Automation</h3>
              <p>Explore how AI can streamline operations, reduce costs, and drive smarter decisions across your business.</p>
              <a href="#" className="read-more">Watch Now →</a>
            </div>
          </div>
        </div>

        <div className="view-all">
          <a href="#" className="view-all-link">View All Resources →</a>
        </div>
      </div>
    </section>
  );
};

export default DigitalResources;