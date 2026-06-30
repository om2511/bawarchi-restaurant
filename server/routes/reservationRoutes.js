import express from "express";
import Reservation from "../models/Reservation.js";

const router = express.Router();

// Create a reservation (public)
router.post("/", async (req, res) => {
  try {
    const { name, phone, date, time, guests } = req.body;
    if (!name || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;