import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    quantity: { type: String, default: "" }, // e.g. "250ml", "350gm"
    category: { type: mongoose.Schema.Types.ObjectId, ref: "MenuCategory", required: true },
    image: { type: String, default: "" }, // Cloudinary URL, optional
    vegOnly: { type: Boolean, default: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);