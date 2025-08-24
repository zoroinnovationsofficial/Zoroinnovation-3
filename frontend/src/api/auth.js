import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/api/v1/auth/login', { email, password });
    if (response.data && response.data.data.accessToken) {
      localStorage.setItem('accessToken', response.data.data.accessToken);
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
