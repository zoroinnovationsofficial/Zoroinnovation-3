import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({
  path: path.join(__dirname, '../.env'),
});

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

console.log('🚀 Starting ZoroInnovations Backend Server...');
console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🔌 Port: ${PORT}`);
console.log(`🗄️  MongoDB URI: ${MONGO_URI}`);

// Always attempt to connect to MongoDB
const startServer = async () => {
  // Start the HTTP server first so the app can serve health checks even if DB is down
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API available at: http://localhost:${PORT}/api/v1`);
  });

  // Then attempt DB connection; do not exit the process on failure
  try {
    console.log('🔗 Attempting to connect to MongoDB...');
    await connectDB();
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.error('💡 Make sure MongoDB is running and accessible');
    console.error('💡 Check your .env file has correct MONGO_URI');
    console.error('💡 Run: npm run seed to populate test data');
  }
};

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
});

// Start the server
startServer();
