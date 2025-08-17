import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

export const getAllTeamMembers = async () => {
  try {
    const response = await apiClient.get('/api/team-members');
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};
