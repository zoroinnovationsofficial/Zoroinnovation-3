import React from 'react';
import styles from './HeaderSection.module.css'; // 👈 use CSS module import
import SearchIcon from '../../../assets/Searchicon.svg'; 

const HeroSection = () => {
  const jobData = [
    {
      title: "Frontend Developer",
      description: "Build fast, responsive, and interactive UIs using React, Tailwind, and Next.js.",
      type: "Full-time",
      location: "Remote / Hybrid – Pune",
      salary: "₹10L – ₹18L per annum"
    },
    {
      title: "Product Designer (UI/UX)",
      description: "Craft intuitive and visually stunning user experiences across mobile and web apps.",
      type: "Full-time",
      location: "Remote / Mumbai",
      salary: "₹12L – ₹20L per annum"
    },
    {
      title: "DevOps Engineer",
      description: "Implement CI/CD pipelines, deployments, and maintain scalable infrastructure on AWS/Azure.",
      type: "Full-time",
      location: "Remote / Hybrid – Pune",
      salary: "₹10L – ₹18L per annum"
    }
  ];

  return (
    <section className={styles['hero-section']}>
      <h2>Current Job Opportunities</h2>
      <p>Explore our open positions and find your perfect role in our growing team.</p>

      <div className={styles['search-wrapper']}>
        <img src={SearchIcon} alt="Search Icon" className={styles['search-icon']} />
        <input
          type="text"
          placeholder="Search positions..."
          className={styles['search-bar']}
        />
      </div>

      <div className={styles['job-list']}>
        {jobData.map((job, index) => (
          <div className={styles['job-card']} key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <div className={styles['job-tags']}>
              <span className={`${styles.tag} ${styles.blue}`}>{job.type}</span>
              <span className={`${styles.tag} ${styles.gray}`}>{job.location}</span>
              <span className={`${styles.tag} ${styles.gray}`}>{job.salary}</span>
            </div>
            <button className={styles['apply-btn']}>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
