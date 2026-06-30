import mongoose from "mongoose";
import dotenv from "dotenv";
import GalleryImage from "../models/GalleryImage.js";

dotenv.config();

const galleryData = [
  {
    title: "Entrance Fountain & Buddha Statue",
    imageUrl: "/images/buddha-fountain.png",
    category: "Ambience",
    order: 1,
  },
  {
    title: "Banquet Hall, Evening View",
    imageUrl: "/images/banquet-night.png",
    category: "Banquet",
    order: 2,
  },
  {
    title: "Restaurant & Banquet Exterior",
    imageUrl: "/images/banquet-restaurant.png",
    category: "Exterior",
    order: 3,
  },
  {
    title: "Reception Area",
    imageUrl: "/images/reception-office.png",
    category: "Ambience",
    order: 4,
  },
];

const seedGallery = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for gallery seeding...");

    await GalleryImage.deleteMany();
    await GalleryImage.insertMany(galleryData);

    console.log(`Seeded ${galleryData.length} gallery images.`);
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedGallery();