import express from "express";
import Reservation from "../models/Reservation.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC — create reservation
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

// PROTECTED — get all reservations
router.get("/", protect, async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PROTECTED — update status
router.put("/:id", protect, async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id, { status: req.body.status }, { new: true }
    );
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;