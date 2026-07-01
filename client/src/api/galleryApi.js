import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const authHeader = () => {
  const stored = localStorage.getItem("bawarchi_admin");
  const token = stored ? JSON.parse(stored).token : null;
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchGallery = async () => {
  const res = await axios.get(`${API_URL}/gallery`);
  return res.data;
};

export const createGalleryImage = async (data) => {
  const res = await axios.post(`${API_URL}/gallery`, data, authHeader());
  return res.data;
};

export const deleteGalleryImage = async (id) => {
  const res = await axios.delete(`${API_URL}/gallery/${id}`, authHeader());
  return res.data;
};

export const uploadImage = async (file) => {
  const stored = localStorage.getItem("bawarchi_admin");
  const token = stored ? JSON.parse(stored).token : null;

  const formData = new FormData();
  formData.append("image", file);

  const res = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};