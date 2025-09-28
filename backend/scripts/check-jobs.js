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

async function checkJobs() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    console.log('📊 Checking existing jobs...');
    const jobs = await Job.find();
    console.log(`📝 Found ${jobs.length} jobs in database:`);
    
    jobs.forEach((job, index) => {
      console.log(`${index + 1}. ${job.title} (${job.status}) - ${job.applicationUrl}`);
    });

    console.log('🎉 Job check complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error checking jobs:', error);
    process.exit(1);
  }
}

checkJobs();
