import { useEffect, useState } from "react";
import { buildApiUrl } from "../../api/config";

export default function EmployeeVer() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [editData, setEditData] = useState({});
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    department: "",
    role: "",
    startDate: "",
    status: "",
    certificateDate: "",
  });

  const employeesPerPage = 10;
  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  // ✅ Reusable fetch function (with cookies)
  async function fetchEmployees() {
    try {
      const params = new URLSearchParams({ page: "1", limit: "1000" });
      const res = await fetch(buildApiUrl(`/api/v1/employee/getemployees?${params}`), {
        credentials: "include",
        mode: "cors",
      });
      if (!res.ok) throw new Error("Failed to fetch employees");
      const data = await res.json();
      const list = (data?.employees || []).map((e) => ({
        id: e.employeeId,
        name: e.fullName,
        department: e.department,
        role: e.role,
        startDate: e.startDate?.slice(0, 10) || "",
        status: e.status,
        certificateDate: e.certificateIssueDate?.slice(0, 10) || "",
      }));
      setEmployees(list);
    } catch (err) {
      console.error("Admin fetch employees failed:", err.message);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  // --- Verify ---
  const handleVerify = async () => {
    const trimmed = (searchId || "").trim();
    if (!trimmed) {
      alert("Please enter a valid Employee ID");
      return;
    }
    try {
      const res = await fetch(buildApiUrl("/api/v1/employee/verify-employee-id"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({ employeeId: trimmed }),
      });
      if (res.ok) {
        const data = await res.json();
        const e = data?.employee;
        setSelectedEmployee(
          e && {
            id: e.employeeId,
            name: e.fullName,
            department: e.department,
            role: e.role,
            startDate: e.startDate?.slice(0, 10) || "",
            status: e.status,
            certificateDate: e.certificateIssueDate?.slice(0, 10) || "",
          }
        );
        if (!e) alert("No employee found with this ID");
        return;
      }
    } catch (err) {
      console.warn("Primary verify failed, falling back to list search.");
    }

    // Fallback search
    const found = employees.find((emp) => (emp.id || "").toLowerCase() === trimmed.toLowerCase());
    setSelectedEmployee(found || null);
    if (!found) alert("No employee found with this ID");
  };

  // --- Edit ---
  async function handleEditSubmit() {
    try {
      const res = await fetch(buildApiUrl(`/api/v1/employee/edit-employee/${editData.id}`), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({
          employeeId: editData.id,
          fullName: editData.name,
          department: editData.department,
          role: editData.role,
          startDate: editData.startDate,
          status: editData.status,
          certificateIssueDate: editData.certificateDate,
        }),
      });
      if (res.ok) {
        await fetchEmployees(); // ✅ refresh list
        setEditModalOpen(false);
      } else {
        alert("Failed to update employee");
      }
    } catch (err) {
      console.error("Edit failed:", err);
      alert("Failed to update employee");
    }
  }

  // --- Delete ---
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      const res = await fetch(buildApiUrl(`/api/v1/employee/delete-employee/${id}`), {
        method: "DELETE",
        credentials: "include",
        mode: "cors",
      });
      if (res.ok) {
        await fetchEmployees();
      } else {
        alert("Failed to delete employee");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete employee");
    }
  }

  // --- Add ---
  async function handleNewSubmit() {
    const missing = [];
    if (!newData.id) missing.push("Employee ID");
    if (!newData.name) missing.push("Full Name");
    if (!newData.department) missing.push("Department");
    if (!newData.role) missing.push("Role");
    if (!newData.startDate) missing.push("Start Date");
    if (!newData.certificateDate) missing.push("Certificate Issue Date");
    if (!newData.status) missing.push("Status");

    if (newData.status && !["Active", "Inactive"].includes(newData.status)) {
      alert("Status must be either Active or Inactive");
      return;
    }

    if (missing.length) {
      alert(`Please fill required fields: ${missing.join(", ")}`);
      return;
    }

    try {
      const res = await fetch(buildApiUrl("/api/v1/employee/create-employee"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({
          employeeId: newData.id,
          fullName: newData.name,
          department: newData.department,
          role: newData.role,
          startDate: newData.startDate,
          status: newData.status,
          certificateIssueDate: newData.certificateDate,
        }),
      });
      if (res.ok) {
        await fetchEmployees();
        setNewData({ id: "", name: "", department: "", role: "", startDate: "", status: "", certificateDate: "" });
        setAddModalOpen(false);
      } else {
        alert("Failed to create employee");
      }
    } catch (err) {
      console.error("Create failed:", err);
      alert("Failed to create employee");
    }
  }

  return (
    // ✅ rest of your JSX stays unchanged
    // (I just removed localStorage usage & ensured cookie-based requests)
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0047ab] via-[#5d6bd9] to-[#ff7e5f]">
      {/* ... your JSX remains unchanged ... */}
    </div>
  );
}
