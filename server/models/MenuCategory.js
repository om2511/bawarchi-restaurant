import mongoose from "mongoose";

const menuCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // e.g. "Varity of Hot Soup"
    slug: { type: String, required: true, unique: true },  // e.g. "hot-soup"
    order: { type: Number, default: 0 }, // controls display order on Menu page
  },
  { timestamps: true }
);

export default mongoose.model("MenuCategory", menuCategorySchema);