import React, { useState } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    {
      name: "Ethan Harper",
      role: "Lead Developer",
      bio: "Ethan leads the development team, ensuring high-quality code and timely project delivery.",
      id: "1234",
    },
    {
      name: "Olivia Bennett",
      role: "Product Manager",
      bio: "Olivia oversees product development, ensuring alignment with market needs and customer satisfaction.",
      id: "2345",
    },
    {
      name: "Noah Carter",
      role: "AI Specialist",
      bio: "Noah focuses on AI research and development, creating innovative solutions for complex problems.",
      id: "6789",
    },
    {
      name: "Ava Thompson",
      role: "UX/UI Designer",
      bio: "Ava designs intuitive and engaging user interfaces, enhancing user experience and satisfaction.",
      id: "5454",
    },
    {
      name: "Liam Foster",
      role: "QA Engineer",
      bio: "Liam ensures the quality and reliability of our products through rigorous testing and feedback.",
      id: "2362",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", role: "", bio: "", id: "" });

  // Start editing
  const handleEdit = (idx) => {
    setEditIndex(idx);
    setEditData(employees[idx]);
  };

  // Save changes
  const handleSave = (idx) => {
    const updatedEmployees = [...employees];
    updatedEmployees[idx] = editData;
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };

  // Handle input changes
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-x-auto mb-12">
      <h2 className="text-2xl font-bold mb-6">Employee Table</h2>

      {/* Desktop Table */}
      <table className="hidden md:table w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="p-6 font-bold">Name</th>
            <th className="p-6 font-bold">Role</th>
            <th className="p-6 font-bold">Bio</th>
            <th className="p-6 font-bold">Emp. ID</th>
            <th className="p-6 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr
              key={idx}
              className="border-b transition-all duration-300 hover:bg-gray-200"
            >
              {editIndex === idx ? (
                <>
                  <td className="p-6">
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <input
                      type="text"
                      name="role"
                      value={editData.role}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <input
                      type="text"
                      name="id"
                      value={editData.id}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6 flex gap-2">
                    <button
                      onClick={() => handleSave(idx)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-6">{emp.name}</td>
                  <td className="p-6 text-gray-600">{emp.role}</td>
                  <td className="p-6 text-gray-600">{emp.bio}</td>
                  <td className="p-6">{emp.id}</td>
                  <td className="p-6">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {employees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
          >
            {editIndex === idx ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded mb-2"
                />
                <input
                  type="text"
                  name="role"
                  value={editData.role}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded mb-2"
                />
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded mb-2"
                />
                <input
                  type="text"
                  name="id"
                  value={editData.id}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full rounded mb-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(idx)}
                    className="w-1/2 px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className="w-1/2 px-4 py-2 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="font-bold text-lg">{emp.name}</p>
                <p className="text-sm text-gray-600">{emp.role}</p>
                <p className="text-sm text-gray-600 mt-2">{emp.bio}</p>
                <p className="text-sm text-gray-500 mt-1">ID: {emp.id}</p>

                <div className="mt-3">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="w-full px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
