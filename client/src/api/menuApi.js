import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchMenu = async () => {
  const res = await axios.get(`${API_URL}/menu`);
  return res.data;
};