import express from "express";
import MenuCategory from "../models/MenuCategory.js";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// GET all categories with their items
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

export default router;