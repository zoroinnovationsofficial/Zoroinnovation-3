import React from 'react';

const EmployeeTable = () => {
  const employees = [
    {
      name: 'Ethan Harper',
      role: 'Lead Developer',
      bio: 'Ethan leads the development team, ensuring high-quality code and timely project delivery.',
      id: '1234',
    },
    {
      name: 'Olivia Bennett',
      role: 'Product Manager',
      bio: 'Olivia oversees product development, ensuring alignment with market needs and customer satisfaction.',
      id: '2345',
    },
    {
      name: 'Noah Carter',
      role: 'AI Specialist',
      bio: 'Noah focuses on AI research and development, creating innovative solutions for complex problems.',
      id: '6789',
    },
    {
      name: 'Ava Thompson',
      role: 'UX/UI Designer',
      bio: 'Ava designs intuitive and engaging user interfaces, enhancing user experience and satisfaction.',
      id: '5454',
    },
    {
      name: 'Liam Foster',
      role: 'QA Engineer',
      bio: 'Liam ensures the quality and reliability of our products through rigorous testing and feedback.',
      id: '2362',
    },
  ];

  return (
    <div className="overflow-x-auto mb-12">
      <h2 className="text-2xl font-bold mb-6">Employee Table</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="p-10 font-bold">Name</th>
            <th className="p-10 font-bold">Role</th>
            <th className="p-10 font-bold">Bio</th>
            <th className="p-10 font-bold">Emp. ID</th>
            <th className="p-10 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr
              key={idx}
              className="border-b transition-all duration-300 hover:bg-grey-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-orange-500"
            >
              <td className="p-10">{emp.name}</td>
              <td className="p-10 text-gray-600">{emp.role}</td>
              <td className="p-10 text-gray-600">{emp.bio}</td>
              <td className="p-10">{emp.id}</td>
              <td className="p-10 text-orange-500 font-bold cursor-pointer">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
