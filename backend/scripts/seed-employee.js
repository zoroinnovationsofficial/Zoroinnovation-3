import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Employee } from '../src/models/employee.model.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

async function main() {
  const TEST_EMPLOYEE_ID = process.env.TEST_EMPLOYEE_ID || 'EMP1001';
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected');

    const existing = await Employee.findOne({ employeeId: TEST_EMPLOYEE_ID });
    if (existing) {
      console.log(`ℹ️ Employee ${TEST_EMPLOYEE_ID} already exists. Updating to Active status.`);
      existing.status = 'Active';
      await existing.save();
      console.log('✅ Updated existing employee to Active');
    } else {
      const now = new Date();
      const startDate = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
      const certificateIssueDate = new Date(now.getFullYear(), now.getMonth() - 5, now.getDate());

      await Employee.create({
        employeeId: TEST_EMPLOYEE_ID,
        fullName: 'Test User',
        department: 'Engineering',
        role: 'SDE',
        startDate,
        status: 'Active',
        certificateIssueDate,
      });
      console.log(`✅ Seeded employee ${TEST_EMPLOYEE_ID}`);
    }
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

main();


