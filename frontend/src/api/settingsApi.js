// Use the same pattern as config.js for environment variable handling
const API_BASE_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  process.env.REACT_APP_API_BASE_URL ||
  (typeof window !== 'undefined' && window.ENV && window.ENV.API_BASE_URL) ||
  'http://localhost:8000/api/v1';

const getAccessToken = () => localStorage.getItem('accessToken');

// Get settings (admin only)
export const getSettings = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/settings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch settings');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
};

// Update settings (admin only)
export const updateSettings = async (settingsData) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_BASE_URL}/admin/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(settingsData),
    });

    if (!response.ok) {
      throw new Error('Failed to update settings');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};

// Get Google form link (public)
export const getGoogleFormLink = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/google-form-link`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Google form link');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Google form link:', error);
    throw error;
  }
};
