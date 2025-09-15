// src/api/teamMemberApi.js
import axios from "axios";

const API_BASE = "https://zoroinnovations-backend.vercel.app";

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 50000,
  withCredentials: true,
});

// 🔹 Attach token automatically (if available)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper to map frontend fields to backend fields
const buildFormData = (data) => {
  const formData = new FormData();

  // Map frontend fullName → backend name
  if (data.fullName) formData.append("name", data.fullName);

  // Map frontend position → backend role
  if (data.position) formData.append("role", data.position);

  if (data.image) formData.append("image", data.image);
  if (data.bio) formData.append("bio", data.bio);
  if (data.email) formData.append("email", data.email);
  if (data.linkedinUrl) formData.append("linkedinUrl", data.linkedinUrl);
  if (data.phone) formData.append("phone", data.phone);

  if (Array.isArray(data.specializations)) {
    data.specializations.forEach((s) =>
      formData.append("specializations[]", s)
    );
  }

  if (Array.isArray(data.certifications)) {
    data.certifications.forEach((c) =>
      formData.append("certifications[]", c)
    );
  }

  if (data.yearsExperience !== undefined)
    formData.append("yearsExperience", data.yearsExperience);

  if (data.isActive !== undefined) formData.append("isActive", data.isActive);

  if (data.displayOrder !== undefined)
    formData.append("displayOrder", data.displayOrder);

  return formData;
};

// GET all team members
export const getAllTeamMembers = async () => {
  try {
    const response = await apiClient.get("/api/admin/team-members");
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error.response || error);
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch team members";
    throw new Error(message);
  }
};

// CREATE a team member
export const createTeamMember = async (data) => {
  try {
    const formData = buildFormData(data);

    const response = await apiClient.post("/api/admin/team-members", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating member:", error.response || error);
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to create team member";
    throw new Error(message);
  }
};

// UPDATE a team member by ID
export const updateTeamMember = async (id, data) => {
    try {
      // Send JSON exactly as backend expects
      const payload = {
        fullName: data.fullName,
        position: data.position,
        bio: data.bio,
        email: data.email,
        linkedinUrl: data.linkedinUrl,
        phone: data.phone,
        specializations: data.specializations || [],
        certifications: data.certifications || [],
        yearsExperience: data.yearsExperience,
        isActive: data.isActive,
        displayOrder: data.displayOrder,
      };
  
      const response = await apiClient.put(
        `/api/admin/team-members/${id}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error updating member:", error.response || error);
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update team member";
      throw new Error(message);
    }
  };
  
  

// DELETE a team member by ID
export const deleteTeamMember = async (id) => {
  try {
    const response = await apiClient.delete(`/api/admin/team-members/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting member:", error.response || error);
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to delete team member";
    throw new Error(message);
  }
};
