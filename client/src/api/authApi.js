import axios from "axios";

const getApiUrl = () => {
  let url = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  if (url && !url.endsWith("/api")) {
    url = url.replace(/\/$/, "") + "/api";
  }
  return url;
};
const API_URL = getApiUrl();

export const loginAdmin = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data;
};