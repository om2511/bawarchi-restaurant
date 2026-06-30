import express from "express";
import GalleryImage from "../models/GalleryImage.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ order: 1, createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;