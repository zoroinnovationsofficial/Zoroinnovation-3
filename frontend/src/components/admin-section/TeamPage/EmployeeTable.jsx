import React, { useState, useEffect } from "react";
import {
  getAllTeamMembers,
  deleteTeamMember,
  updateTeamMember,
} from "../../../api/adminTeamMemebersApi";
import AddTeamMemberForm from "./AddTeamMemberForm";

const placeholder = "/assets/TeamPage/img3.png";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // 🔹 Fetch employees
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const data = await getAllTeamMembers();

      setEmployees(
        data?.data?.map((member) => ({
          id: member._id,
          fullName: member.fullName,
          position: member.position,
          bio: member.bio,
          email: member.email,
          linkedinUrl: member.linkedinUrl,
          imageUrl: member.imageUrl || placeholder,
          specializations: member.specializations || [],
          certifications: member.certifications || [],
          yearsExperience: member.yearsExperience || "",
          isActive: member.isActive,
          displayOrder: member.displayOrder || "",
        })) || []
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // 🔹 Edit handlers
  const handleEdit = (idx) => {
    setEditIndex(idx);
    setEditData(employees[idx]);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({
      ...editData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveEdit = async (idx) => {
    try {
      await updateTeamMember(editData.id, {
        fullName: editData.fullName,
        position: editData.position,
        bio: editData.bio,
        email: editData.email,
        linkedinUrl: editData.linkedinUrl,
        specializations: editData.specializations,
        certifications: editData.certifications,
        yearsExperience: editData.yearsExperience,
        isActive: editData.isActive,
        displayOrder: editData.displayOrder,
      });

      alert("Team member updated successfully!");
      setEditIndex(null);
      await fetchMembers();
    } catch (err) {
      alert("Failed to update member: " + err.message);
    }
  };

  // 🔹 Delete handler
  const handleDelete = async (idx) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team member?"
    );
    if (!confirmDelete) return;

    try {
      await deleteTeamMember(employees[idx].id);
      alert("Team member deleted successfully!");
      await fetchMembers();
    } catch (err) {
      alert("Failed to delete member: " + err.message);
    }
  };

  if (loading) return <p>Loading team members...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Employee Management</h2>

      {/* Add Team Member */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-6 py-3 bg-orange-500 text-white rounded-lg font-bold"
        >
          + Add Team Member
        </button>
      )}

      {showForm && (
        <AddTeamMemberForm
          onSuccess={async () => {
            setShowForm(false);
            await fetchMembers();
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-6 font-bold">Profile</th>
              <th className="p-6 font-bold">Name</th>
              <th className="p-6 font-bold">Position</th>
              <th className="p-6 font-bold">Bio</th>
              <th className="p-6 font-bold">Email</th>
              <th className="p-6 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={emp.id} className="border-b hover:bg-gray-200 transition">
                {editIndex === idx ? (
                  <>
                    <td className="p-6">
                      <img
                        src={emp.imageUrl}
                        alt={emp.fullName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-6">
                      <input
                        name="fullName"
                        value={editData.fullName}
                        onChange={handleEditChange}
                        className="border px-2 py-1 w-full rounded"
                      />
                    </td>
                    <td className="p-6">
                      <input
                        name="position"
                        value={editData.position}
                        onChange={handleEditChange}
                        className="border px-2 py-1 w-full rounded"
                      />
                    </td>
                    <td className="p-6">
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleEditChange}
                        className="border px-2 py-1 w-full rounded"
                      />
                    </td>
                    <td className="p-6">
                      <input
                        name="email"
                        value={editData.email}
                        onChange={handleEditChange}
                        className="border px-2 py-1 w-full rounded"
                      />
                    </td>
                    <td className="p-6 flex gap-2">
                      <button
                        onClick={() => handleSaveEdit(idx)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="px-3 py-1 bg-gray-400 text-white rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-6">
                      <img
                        src={emp.imageUrl}
                        alt={emp.fullName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-6 text-gray-800 font-medium">{emp.fullName}</td>
                    <td className="p-6 text-gray-600">{emp.position}</td>
                    <td className="p-6 text-gray-600">{emp.bio}</td>
                    <td className="p-6">{emp.email}</td>
                    <td className="p-6 flex gap-2">
                      <button
                        onClick={() => handleEdit(idx)}
                        className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(idx)}
                        className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {employees.map((emp, idx) => (
          <div
            key={emp.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={emp.imageUrl}
                alt={emp.fullName}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{emp.fullName}</p>
                <p className="text-sm text-gray-600">{emp.position}</p>
                <p className="text-xs text-gray-500">{emp.email}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 sm:mt-0">
              <button
                onClick={() => handleEdit(idx)}
                className="px-3 py-1 text-sm bg-orange-500 text-white rounded-lg hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
