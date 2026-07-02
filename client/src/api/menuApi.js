import axios from "axios";

const getApiUrl = () => {
  let url = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  if (url && !url.endsWith("/api")) {
    url = url.replace(/\/$/, "") + "/api";
  }
  return url;
};
const API_URL = getApiUrl();

const authHeader = () => {
  const stored = localStorage.getItem("bawarchi_admin");
  const token = stored ? JSON.parse(stored).token : null;
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchMenu = async () => {
  const res = await axios.get(`${API_URL}/menu`);
  return res.data;
};

export const fetchMenuAdmin = async () => {
  const res = await axios.get(`${API_URL}/menu/admin/all`, authHeader());
  return res.data;
};

export const createMenuItem = async (data) => {
  const res = await axios.post(`${API_URL}/menu`, data, authHeader());
  return res.data;
};

export const updateMenuItem = async (id, data) => {
  const res = await axios.put(`${API_URL}/menu/${id}`, data, authHeader());
  return res.data;
};

export const deleteMenuItem = async (id) => {
  const res = await axios.delete(`${API_URL}/menu/${id}`, authHeader());
  return res.data;
};