import { Employee } from '../models/employee.model.js';

const employeeVerificationController = async (req, res) => {
  try {
    const { employeeId } = req.body;
    if (!employeeId) {
      return res.status(400).json({ message: 'Employee ID is required' });
    }
    // Normalize and support common variants like E1/E01/E001 vs EMP001
    const normalizedInput = String(employeeId).trim();
    const upper = normalizedInput.toUpperCase();
    const candidateIds = new Set([upper]);

    const match = upper.match(/^(?:EMP|E)(\d+)$/i);
    if (match) {
      const digits = match[1];
      const padded = digits.padStart(3, '0');
      candidateIds.add(`E${padded}`);
      candidateIds.add(`EMP${padded}`);
    }

    // 1) Prefer exact, case-insensitive match to admin-stored ID
    let employee = await Employee.findOne({
      employeeId: { $regex: new RegExp(`^${upper}$`, 'i') },
    });
    // 2) Fallback: exact candidates
    if (!employee) {
      employee = await Employee.findOne({ employeeId: { $in: Array.from(candidateIds) } });
    }
    if (!employee) {
      const digits = (upper.match(/^(?:EMP|E)(\d+)$/i) || [null, null])[1];
      if (digits) {
        const padded = digits.padStart(3, '0');
        const regex = new RegExp(`^(?:EMP|E)0*${digits}$`, 'i');
        employee = await Employee.findOne({
          $or: [
            { employeeId: { $regex: new RegExp(`^E0*${digits}$`, 'i') } },
            { employeeId: { $regex: new RegExp(`^EMP0*${digits}$`, 'i') } },
            { employeeId: { $regex: regex } },
            { employeeId: `E${padded}` },
            { employeeId: `EMP${padded}` },
          ],
        });
      }
    }
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Return employee details regardless of status; include flags for client UI
    const isActive = employee.status === 'Active';
    const employeeObj = employee.toObject ? employee.toObject() : employee;
    return res.status(200).json({
      success: true,
      message: isActive
        ? 'Employee verification successful'
        : 'Employee found but not active',
      employee: { ...employeeObj, isActive },
    });
  } catch (error) {
    console.error('Error verifying employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      fullName,
      department,
      role,
      startDate,
      status,
      certificateIssueDate,
    } = req.body;
    if (
      !employeeId ||
      !fullName ||
      !department ||
      !role ||
      !startDate ||
      !status
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingEmployee = await Employee.findOne({ employeeId });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists' });
    }

    const newEmployee = new Employee({
      employeeId,
      fullName,
      department,
      role,
      startDate,
      status,
      certificateIssueDate,
    });

    await newEmployee.save();

    return res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      employee: newEmployee,
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalEmployees = await Employee.countDocuments();
    const totalPages = Math.ceil(totalEmployees / limit);
    const employees = await Employee.find().skip(skip).limit(limit);
    return res.status(200).json({
      success: true,
      employees,
      pagination: {
        totalEmployees,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    });
  } catch (error) {
    console.error('Error fetching employees:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const editEmployeeData = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const updates = req.body;

    if (!employeeId || Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: 'Employee ID and updates are required' });
    }

    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const allowedFields = [
      'fullName',
      'department',
      'role',
      'startDate',
      'status',
      'certificateIssueDate',
    ];

    for (const field of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(updates, field)) {
        employee[field] = updates[field];
      }
    }
    await employee.save();
    return res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      employee,
    });
  } catch (error) {
    console.error('Error updating employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const changeEmployeeStatus = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    if (employee.status === status) {
      return res
        .status(400)
        .json({ message: 'Employee status is already set to this value' });
    }

    employee.status = status;
    await employee.save();

    return res.status(200).json({
      success: true,
      message: 'Employee status updated successfully',
      employee,
    });
  } catch (error) {
    console.error('Error updating employee status:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    if (!employeeId) {
      return res.status(400).json({ message: 'Employee ID is required' });
    }
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await Employee.deleteOne({ employeeId });

    return res.status(200).json({
      success: true,
      message: 'Employee deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    if (!employeeId) {
      return res.status(400).json({ message: 'Employee ID is required' });
    }
    // Normalize and support E1/E01/E001 vs EMP001
    const normalizedInput = String(employeeId).trim();
    const upper = normalizedInput.toUpperCase();
    const candidateIds = new Set([upper]);
    const match = upper.match(/^(?:EMP|E)(\d+)$/i);
    if (match) {
      const digits = match[1];
      const padded = digits.padStart(3, '0');
      candidateIds.add(`E${padded}`);
      candidateIds.add(`EMP${padded}`);
    }

    // 1) Prefer exact, case-insensitive match to admin-stored ID
    let employee = await Employee.findOne({
      employeeId: { $regex: new RegExp(`^${upper}$`, 'i') },
    });
    // 2) Fallback: exact candidates
    if (!employee) {
      employee = await Employee.findOne({ employeeId: { $in: Array.from(candidateIds) } });
    }
    if (!employee) {
      const digits = (upper.match(/^(?:EMP|E)(\d+)$/i) || [null, null])[1];
      if (digits) {
        const padded = digits.padStart(3, '0');
        const regex = new RegExp(`^(?:EMP|E)0*${digits}$`, 'i');
        employee = await Employee.findOne({
          $or: [
            { employeeId: { $regex: new RegExp(`^E0*${digits}$`, 'i') } },
            { employeeId: { $regex: new RegExp(`^EMP0*${digits}$`, 'i') } },
            { employeeId: { $regex: regex } },
            { employeeId: `E${padded}` },
            { employeeId: `EMP${padded}` },
          ],
        });
      }
    }
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error('Error fetching employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export {
  employeeVerificationController,
  createEmployee,
  getAllEmployees,
  editEmployeeData,
  changeEmployeeStatus,
  deleteEmployee,
  getEmployeeById,
};
