import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
  connectDB()
    .then(() => {
      console.log('✅ Connected to MongoDB');
      app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
    })
    .catch((err) => {
      console.warn('⚠️  MongoDB connection failed, starting server with mock data:', err.message);
      app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT} (Mock Mode)`));
    });
} else {
  // Production mode - require MongoDB
  connectDB()
    .then(() => {
      app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
    })
    .catch((err) => {
      console.error('❌ MongoDB connection error', err);
      process.exit(1);
    });
}
