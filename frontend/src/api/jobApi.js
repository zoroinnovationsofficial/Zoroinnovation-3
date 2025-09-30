// Use the same pattern as config.js for environment variable handling
const API_BASE_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  process.env.REACT_APP_API_BASE_URL ||
  (typeof window !== 'undefined' && window.ENV && window.ENV.API_BASE_URL) ||
  'http://localhost:8000/api/v1';

// Helper to read the access token saved during login
const getAccessToken = () => localStorage.getItem('accessToken');

// Get all jobs (admin only)
export const getAllJobs = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Get open jobs (public)
export const getOpenJobs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/open`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch open jobs');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching open jobs:', error);
    throw error;
  }
};

// Create new job (admin only)
export const createJob = async (jobData) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error('Failed to create job');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

// Update job (admin only)
export const updateJob = async (jobId, jobData) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/jobs/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error('Failed to update job');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

// Delete job (admin only)
export const deleteJob = async (jobId) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/jobs/${jobId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete job');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};
// Toggle job status (admin only)
export const toggleJobStatus = async (jobId) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/jobs/${jobId}/toggle-status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to toggle job status');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error toggling job status:', error);
    throw error;
  }
};