import axios from "axios";
import { BASE_URL } from "./config";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Set the Authorization header for all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("Authorization");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`Error in interceptor ${error}`);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("Authorization");
      window.location.href = "/login"; // TODO: Use react-router-dom (or smth else) to redirect
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
