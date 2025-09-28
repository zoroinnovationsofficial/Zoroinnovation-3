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

async function testAPI() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    console.log('🧪 Testing API endpoints...');
    
    // Test getting all jobs
    console.log('\n📋 Testing getAllJobs...');
    const allJobs = await Job.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${allJobs.length} total jobs`);
    
    // Test getting open jobs
    console.log('\n📋 Testing getOpenJobs...');
    const openJobs = await Job.find({ status: 'Open' }).sort({ createdAt: -1 });
    console.log(`✅ Found ${openJobs.length} open jobs`);
    
    // Show job details
    console.log('\n📝 Job Details:');
    allJobs.forEach((job, index) => {
      console.log(`${index + 1}. ${job.title} (${job.status})`);
      console.log(`   Department: ${job.department}`);
      console.log(`   Location: ${job.location}`);
      console.log(`   Application URL: ${job.applicationUrl}`);
      console.log(`   Created: ${job.createdAt}`);
      console.log('');
    });

    console.log('🎉 API test complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error testing API:', error);
    process.exit(1);
  }
}

testAPI();
