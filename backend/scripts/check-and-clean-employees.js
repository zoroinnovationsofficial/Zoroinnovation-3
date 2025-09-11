import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Employee } from '../src/models/employee.model.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

async function run() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected');

    const deleteFilter = {
      $or: [
        { fullName: { $in: [
          'Test User','Michael Johnson','Sandra Lee','Ravi Kumar','Fatima Shaikh','Chen Wei','Olivia Smith','Lucas Martín','Amina Yusuf','Daniel Müller','Emma Dubois','Sam','John Doe','Jane Smith','Johan Dao'
        ]}},
        { employeeId: { $in: ['EMP1001','E001','E002','E003','E004','E005','E006','E007','E008','E009','E010','E011'] } }
      ]
    };

    const result = await Employee.deleteMany(deleteFilter);
    console.log(`🗑️  Removed ${result.deletedCount} dummy employees`);

    const remaining = await Employee.find().lean();
    console.log('📋 Remaining employees:');
    remaining.forEach(e => console.log(` - ${e.employeeId}: ${e.fullName} (${e.status})`));
  } catch (err) {
    console.error('❌ Error:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

run();


