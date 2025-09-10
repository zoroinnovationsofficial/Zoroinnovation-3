import fetch from 'node-fetch';

async function main() {
  try {
    const res = await fetch('http://localhost:8000/api/v1/employee/verify-employee-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employeeId: 'EMP1001' }),
    });
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('Body:', text);
  } catch (e) {
    console.error('Request failed:', e.message);
  }
}

main();


