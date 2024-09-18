import axios from "axios";
import { BASE_URL } from "./config";

// Create an Axios instance
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

export default axiosInstance;
