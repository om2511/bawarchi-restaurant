import express from "express";
import GalleryImage from "../models/GalleryImage.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ order: 1, createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const image = await GalleryImage.create(req.body);
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const image = await GalleryImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    await GalleryImage.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;