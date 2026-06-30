import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "admin@bawarchi.com"; // change this
    const password = "Bawarchi@2025";   // change this — temp password

    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("Admin already exists.");
      process.exit(0);
    }

    await Admin.create({ email, password });
    console.log(`Admin created: ${email} / ${password}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedAdmin();