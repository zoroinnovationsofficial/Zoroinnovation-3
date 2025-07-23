import TeamMember from '../models/TeamMember.js';

export const getActiveMembers = async (req, res) => {
  const members = await TeamMember.find({ isActive: true }).sort({ displayOrder: 1 });
  res.json({ success: true, data: members, count: members.length });
};

export const getMemberById = async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, data: member });
};

export const getAllMembers = async (req, res) => {
  const members = await TeamMember.find().sort({ displayOrder: 1 });
  res.json({ success: true, data: members });
};

export const createMember = async (req, res) => {
  const newMember = new TeamMember(req.body);
  const saved = await newMember.save();
  res.status(201).json({ success: true, data: saved });
};

export const updateMember = async (req, res) => {
  const updated = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, data: updated });
};

export const deleteMember = async (req, res) => {
  const deleted = await TeamMember.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, message: 'Deleted successfully' });
};