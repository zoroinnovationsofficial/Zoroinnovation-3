import TeamMember from '../models/teamMembers.model.js';

export const getAllTeamMembers = async () =>
  TeamMember.find().sort({ createdAt: -1 });
export const getTeamMemberById = async (id) => TeamMember.findById(id);

export const createTeamMember = async (data) => TeamMember.create(data);

export const updateTeamMember = async (id, data) =>
  TeamMember.findByIdAndUpdate(id, data, { new: true });

export const deleteTeamMember = async (id) => TeamMember.findByIdAndDelete(id);
