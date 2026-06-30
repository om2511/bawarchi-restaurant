import express from "express";
import MenuCategory from "../models/MenuCategory.js";
import MenuItem from "../models/MenuItem.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC — get all categories with items
router.get("/", async (req, res) => {
  try {
    const categories = await MenuCategory.find().sort({ order: 1 });
    const items = await MenuItem.find({ available: true });

    const result = categories.map((cat) => ({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      items: items.filter((item) => item.category.toString() === cat._id.toString()),
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PROTECTED — get all items (including unavailable) for admin
router.get("/admin/all", protect, async (req, res) => {
  try {
    const categories = await MenuCategory.find().sort({ order: 1 });
    const items = await MenuItem.find().populate("category", "name");
    res.json({ categories, items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PROTECTED — create item
router.post("/", protect, async (req, res) => {
  try {
    const item = await MenuItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PROTECTED — update item
router.put("/:id", protect, async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PROTECTED — delete item
router.delete("/:id", protect, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;