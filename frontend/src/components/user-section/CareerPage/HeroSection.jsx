import React, { useState, useEffect } from 'react';
import styles from './HeaderSection.module.css'; 
import SearchIcon from '../../../assets/Searchicon.svg'; 
import { getOpenJobs } from '../../../api/jobApi';

const HeroSection = () => {
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await getOpenJobs();
      setJobData(response.data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobData([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApplyClick = (job) => {
    if (job.applicationUrl) {
      window.open(job.applicationUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert('Application URL not available for this position.');
    }
  };


  return (
    <section className={styles['hero-section']}>
      <h2>Current Job Opportunities</h2>
      <p>Explore our open positions and find your perfect role in our growing team.</p>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading job opportunities...</p>
        </div>
      )}

      {/* Search Bar */}
      <div className={styles['search-wrapper']}>
        <img src={SearchIcon} alt="Search Icon" className={styles['search-icon']} />
        <input
          type="text"
          placeholder="Search positions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles['search-bar']}
        />
      </div>

      {/* Job List */}
      {!loading && (
        <div className={styles['job-list']}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
            <div className={styles['job-card']} key={index}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div className={styles['job-tags']}>
                <span className={`${styles.tag} ${styles.blue}`}>{job.type}</span>
                <span className={`${styles.tag} ${styles.gray}`}>{job.location}</span>
                <span className={`${styles.tag} ${styles.gray}`}>{job.salary}</span>
              </div>
              <button 
                className={styles['apply-btn']} 
                onClick={() => handleApplyClick(job)}
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className={styles['no-results']}>No matching jobs found.</p>
        )}
        </div>
      )}

    </section>
  );
};

export default HeroSection;
