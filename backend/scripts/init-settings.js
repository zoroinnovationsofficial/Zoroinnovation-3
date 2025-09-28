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

// Import Settings model
import Settings from '../src/models/settings.model.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

async function initSettings() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    console.log('🔍 Checking for existing settings...');
    let settings = await Settings.findOne();
    
    if (!settings) {
      console.log('📝 Creating initial settings document...');
      settings = await Settings.create({
        googleFormLink: '',
        updatedAt: new Date()
      });
      console.log('✅ Settings document created:', settings);
    } else {
      console.log('✅ Settings document already exists:', settings);
    }

    console.log('🎉 Settings initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing settings:', error);
    process.exit(1);
  }
}

initSettings();
