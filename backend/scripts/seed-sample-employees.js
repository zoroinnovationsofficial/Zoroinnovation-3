import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Employee } from '../src/models/employee.model.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

const sample = [
  { id: 'E001', name: 'Michael Johnson', department: 'IT', role: 'Software Engineer', startDate: '2023-03-15', status: 'Active', certificateDate: '2023-08-01' },
  { id: 'E002', name: 'Sandra Lee', department: 'HR', role: 'HR Manager', startDate: '2022-06-10', status: 'Inactive', certificateDate: '2022-11-15' },
  { id: 'E003', name: 'Ravi Kumar', department: 'Finance', role: 'Accountant', startDate: '2021-09-20', status: 'Active', certificateDate: '2022-01-05' },
  { id: 'E004', name: 'Fatima Shaikh', department: 'Marketing', role: 'Marketing Executive', startDate: '2020-11-30', status: 'Active', certificateDate: '2021-03-10' },
  { id: 'E005', name: 'Chen Wei', department: 'R&D', role: 'Research Scientist', startDate: '2023-01-12', status: 'Active', certificateDate: '2023-06-18' },
  { id: 'E006', name: 'Olivia Smith', department: 'Sales', role: 'Sales Associate', startDate: '2022-04-25', status: 'Inactive', certificateDate: '2022-09-12' },
  { id: 'E007', name: 'Lucas Martín', department: 'Design', role: 'UI/UX Designer', startDate: '2021-07-14', status: 'Active', certificateDate: '2021-12-20' },
  { id: 'E008', name: 'Amina Yusuf', department: 'Legal', role: 'Legal Advisor', startDate: '2020-02-03', status: 'Active', certificateDate: '2020-07-22' },
  { id: 'E009', name: 'Daniel Müller', department: 'Operations', role: 'Operations Manager', startDate: '2019-05-18', status: 'Active', certificateDate: '2019-10-30' },
  { id: 'E010', name: 'Emma Dubois', department: 'Admin', role: 'Admin Officer', startDate: '2023-06-21', status: 'Active', certificateDate: '2023-10-01' },
  { id: 'E011', name: 'Sam', department: 'emp', role: 'Officer', startDate: '2023-06-21', status: 'offline', certificateDate: '2023-10-01' },
];

function mapStatus(status) {
  if (!status) return 'Active';
  const s = String(status).toLowerCase();
  if (s === 'active') return 'Active';
  if (s === 'inactive' || s === 'offline') return 'Inactive';
  return 'Inactive';
}

async function upsertEmployees() {
  let created = 0;
  let updated = 0;
  for (const e of sample) {
    const doc = await Employee.findOne({ employeeId: e.id });
    const payload = {
      employeeId: e.id,
      fullName: e.name,
      department: e.department,
      role: e.role,
      startDate: new Date(e.startDate),
      status: mapStatus(e.status),
      certificateIssueDate: new Date(e.certificateDate),
    };
    if (doc) {
      Object.assign(doc, payload);
      await doc.save();
      updated += 1;
    } else {
      await Employee.create(payload);
      created += 1;
    }
  }
  return { created, updated };
}

async function main() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected');
    const { created, updated } = await upsertEmployees();
    console.log(`✅ Seed complete. Created: ${created}, Updated: ${updated}`);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

main();


