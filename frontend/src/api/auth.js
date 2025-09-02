import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  // Include cookies (httpOnly tokens) with requests
  withCredentials: true,
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/api/v1/auth/login', { email, password });
    const resData = response?.data;
    console.log(resData);

    // Backend sends { success, user, message } and sets httpOnly cookies.
    // If a token is ever returned in body, store it; otherwise store an auth flag.
    const token = resData?.data?.accessToken || resData?.accessToken;
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    // UI gate for protected routes when using cookie auth
    if (resData?.success) {
      localStorage.setItem('isAuthenticated', 'true');
      if (resData?.user) {
        localStorage.setItem('currentUser', JSON.stringify(resData.user));
      }
    }

    return resData;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Login failed';
    throw new Error(message);
  }
};

export const register = async (username, email, password, fullName) => {
  try {
    const response = await apiClient.post('/api/v1/auth/register', { username, email, password, fullName });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Registration failed';
    throw new Error(message);
  }
};

export const logout = async () => {
  try {
    await apiClient.post('/api/v1/auth/logout');
  } catch (error) {
    const status = error?.response?.status;
    // Ignore unauthorized/forbidden or network issues during logout
    if (status && status !== 401 && status !== 403) {

      console.warn('Logout API error (non-fatal):', error);
    }
  } finally {
    // Always clear client-side flags
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  }
};
