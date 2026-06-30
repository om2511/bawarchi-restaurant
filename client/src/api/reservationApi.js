import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const createReservation = async (data) => {
  const res = await axios.post(`${API_URL}/reservations`, data);
  return res.data;
};