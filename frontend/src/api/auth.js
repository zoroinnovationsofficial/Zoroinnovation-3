import axios from "axios";

import { API_CONFIG } from "./config";

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  withCredentials: true, // ✅ allow sending/receiving cookies
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/api/v1/auth/login", { email, password });
    const resData = response?.data;
    console.log("🔍 Raw login response:", resData);

    // Try to extract token from various possible keys
    let token;
    const candidates = [
      resData?.accessToken,
      resData?.token,
      resData?.access_token,
      resData?.jwt,
      resData?.data?.accessToken,
      resData?.data?.token,
      resData?.data?.access_token,
      resData?.result?.accessToken,
      resData?.result?.token,
      resData?.tokens?.accessToken,
      resData?.tokens?.access?.token,
    ];

    for (const c of candidates) {
      if (c) {
        token = c;
        break;
      }
    }

    console.log("🧪 Token candidates check:", {
      accessToken: resData?.accessToken,
      token: resData?.token,
      access_token: resData?.access_token,
      jwt: resData?.jwt,
      data_accessToken: resData?.data?.accessToken,
      data_token: resData?.data?.token,
      data_access_token: resData?.data?.access_token,
      result_accessToken: resData?.result?.accessToken,
      result_token: resData?.result?.token,
      tokens_accessToken: resData?.tokens?.accessToken,
      tokens_access_token: resData?.tokens?.access?.token,
    });

    if (!token) {
      console.warn("⚠️ No access token found in login response.", resData);
    }

    if (token) {
      localStorage.setItem("accessToken", token);
      console.log("✅ Access token saved to localStorage:", token);
    }

    if (resData?.success) {
      localStorage.setItem("isAuthenticated", "true");
      if (resData?.user) {
        localStorage.setItem("currentUser", JSON.stringify(resData.user));
      }
    }

    return resData;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || "Login failed";
    throw new Error(message);
  }
};

export const register = async (username, email, password, fullName) => {
  try {
    const response = await apiClient.post("/api/v1/auth/register", {
      username,
      email,
      password,
      fullName,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || "Registration failed";
    throw new Error(message);
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/api/v1/auth/logout");
  } catch (error) {
    const status = error?.response?.status;
    if (status && status !== 401 && status !== 403) {
      console.warn("Logout API error (non-fatal):", error);
    }
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
  }
};
