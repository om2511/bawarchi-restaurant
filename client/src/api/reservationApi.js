import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const authHeader = () => {
  const stored = localStorage.getItem("bawarchi_admin");
  const token = stored ? JSON.parse(stored).token : null;
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const createReservation = async (data) => {
  const res = await axios.post(`${API_URL}/reservations`, data);
  return res.data;
};

export const fetchReservations = async () => {
  const res = await axios.get(`${API_URL}/reservations`, authHeader());
  return res.data;
};

export const updateReservationStatus = async (id, status) => {
  const res = await axios.put(`${API_URL}/reservations/${id}`, { status }, authHeader());
  return res.data;
};