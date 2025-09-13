import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: "https://zoroinnovations-backend.vercel.app",
  timeout: 10000,
  withCredentials: true,
});


export const getAllTeamMembers = async () => {
  try {
    const response = await apiClient.get('/api/team-members');
    return response?.data ?? [];
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Failed to fetch team members';
    console.error('Error fetching team members:', message);
    throw new Error(message);
  }
};
