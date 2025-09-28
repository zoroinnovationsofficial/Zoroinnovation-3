import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: path.join(__dirname, '../.env'),
});

// Import Job model
import Job from '../src/models/job.model.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

const initialJobs = [
  {
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

async function seedJobs() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    console.log('🗑️ Clearing existing jobs...');
    await Job.deleteMany({});
    console.log('✅ Existing jobs cleared');

    console.log('📝 Seeding jobs...');
    const createdJobs = await Job.insertMany(initialJobs);
    console.log(`✅ ${createdJobs.length} jobs created successfully!`);

    console.log('🎉 Job seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding jobs:', error);
    process.exit(1);
  }
}

seedJobs();
