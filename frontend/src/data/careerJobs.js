// Shared job data for both admin and user career pages
export const careerJobs = [
  {
    id: 1,
    title: "AI Research Scientist",
    department: "Research and Development",
    location: "Remote",
    status: "Open",
    date: "2023-11-15",
    applicationUrl: "https://forms.gle/example1",
    description: "Lead cutting-edge AI research and development projects using machine learning and deep learning technologies.",
    type: "Full-time",
    salary: "₹15L – ₹25L per annum"
  },
  {
    id: 2,
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    status: "Open",
    date: "2023-11-10",
    applicationUrl: "https://forms.gle/example2",
    description: "Build scalable web applications and APIs using modern technologies and best practices.",
    type: "Full-time",
    salary: "₹12L – ₹20L per annum"
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    status: "Closed",
    date: "2023-10-20",
    applicationUrl: "https://forms.gle/example3",
    description: "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    type: "Full-time",
    salary: "₹18L – ₹30L per annum"
  },
  {
    id: 4,
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    status: "Open",
    date: "2023-10-15",
    applicationUrl: "https://forms.gle/example4",
    description: "Create intuitive and visually stunning user experiences across mobile and web applications.",
    type: "Full-time",
    salary: "₹10L – ₹18L per annum"
  },
  {
    id: 5,
    title: "Data Analyst",
    department: "Analytics",
    location: "Chicago, IL",
    status: "Closed",
    date: "2023-09-30",
    applicationUrl: "https://forms.gle/example5",
    description: "Analyze complex datasets to provide actionable insights and support data-driven decision making.",
    type: "Full-time",
    salary: "₹8L – ₹15L per annum"
  }
];

// Helper function to get jobs for user view (only open positions)
export const getOpenJobs = () => {
  return careerJobs.filter(job => job.status === "Open");
};

// Helper function to get jobs for admin view (all positions)
export const getAllJobs = () => {
  return careerJobs;
};


