const API_URL = import.meta.env.VITE_API_URL + "/bookings";

// Get all bookings for current user
export async function getBookings(userId) {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  if (!res.ok) throw new Error("Failed to fetch bookings");
  return await res.json();
}

// Create a booking
export async function createBooking(bookingData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  if (!res.ok) throw new Error("Failed to create booking");
  return await res.json();
}

// Update booking
export async function updateBooking(id, updateData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  if (!res.ok) throw new Error("Failed to update booking");
  return await res.json();
}

// Delete booking
export async function deleteBooking(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete booking");
  return await res.json();
}
