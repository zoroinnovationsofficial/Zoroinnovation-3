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

async function testJobAPI() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    console.log('🧪 Testing Job model...');
    console.log('📊 Job model:', Job);
    console.log('🔗 Database connection status:', Job.db.readyState);
    
    // Test finding jobs
    console.log('\n📋 Testing Job.find()...');
    const jobs = await Job.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${jobs.length} jobs`);
    
    // Test finding open jobs
    console.log('\n📋 Testing Job.find({ status: "Open" })...');
    const openJobs = await Job.find({ status: 'Open' }).sort({ createdAt: -1 });
    console.log(`✅ Found ${openJobs.length} open jobs`);
    
    // Test the exact query from the controller
    console.log('\n📋 Testing exact controller query...');
    try {
      const controllerJobs = await Job.find().sort({ createdAt: -1 });
      console.log(`✅ Controller query successful: ${controllerJobs.length} jobs`);
    } catch (controllerError) {
      console.error('❌ Controller query failed:', controllerError);
    }

    console.log('🎉 Job API test complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error testing Job API:', error);
    console.error('❌ Error details:', error.message);
    console.error('❌ Error stack:', error.stack);
    process.exit(1);
  }
}

testJobAPI();
