import express from "express";
import {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking); // Create a new booking
router.get("/", getBookings); // Get all bookings
router.put("/:id", updateBooking); // Update a booking by ID
router.delete("/:id", deleteBooking); // Delete a booking by ID

export default router;
