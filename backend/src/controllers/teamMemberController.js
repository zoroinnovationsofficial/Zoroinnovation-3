import TeamMember from '../models/teamMember.js';

export const getActiveMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({ isActive: true }).sort({ displayOrder: 1 });
    res.json({ success: true, data: members, count: members.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getMemberById = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: member });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllMembers = async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ displayOrder: 1 });
    res.json({ success: true, data: members });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createMember = async (req, res) => {
  try {
    const { name, role, image, ...rest } = req.body;
    const newMember = new TeamMember({ name, role, image, ...rest });
    const saved = await newMember.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const updated = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const deleted = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
