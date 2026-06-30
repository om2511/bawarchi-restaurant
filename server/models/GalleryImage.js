import mongoose from "mongoose";

const galleryImageSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["Ambience", "Food", "Banquet", "Events", "Exterior"],
      default: "Ambience",
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("GalleryImage", galleryImageSchema);