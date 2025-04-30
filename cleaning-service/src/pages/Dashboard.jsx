import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import { getBookings } from "../api/bookings";

export default function Dashboard() {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const userBookings = await getBookings(user.id);
      setBookings(userBookings);
    }
    fetchBookings();
  }, [user]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Bookings</h2>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          to="/bookings/new"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          + New Booking
        </Link>
      </div>
    </div>
  );
}
