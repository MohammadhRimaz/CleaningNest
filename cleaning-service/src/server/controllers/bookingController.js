import Booking from "../models/Booking.js";
import toast from "react-hot-toast";

// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const userId = req.query.user_id;
    const bookings = userId
      ? await Booking.find({ user_id: userId }).populate("service_id")
      : await Booking.find().populate("service_id");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new booking
export const createBooking = async (req, res) => {
  const {
    customer_name,
    mobile_number,
    address,
    date_time,
    service_id,
    user_id,
  } = req.body;

  if (
    !customer_name ||
    !mobile_number ||
    !address ||
    !date_time ||
    !service_id ||
    !user_id
  ) {
    toast.error("All fields are required!");
    return;
  }

  try {
    const booking = new Booking({
      customer_name,
      mobile_number,
      address,
      date_time,
      service_id,
      user_id,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a booking
export const updateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
