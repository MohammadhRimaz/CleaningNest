import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";
import { deleteBooking } from "../api/bookings";
import toast from "react-hot-toast";

export default function BookingCard({ booking }) {
  const { _id, customer_name, address, date_time, service_id } = booking;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await deleteBooking(_id);
        toast.success("Booking deleted successfully!");
        window.location.reload();
      } catch (error) {
        toast.error("Failed to delete booking. Please try again.");
      }
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm bg-gray-100">
      <h3 className="font-semibold text-lg">{customer_name}</h3>
      <p className="text-md text-gray-600">{address}</p>
      <p className="text-md text-gray-500">
        {new Date(date_time).toLocaleString()}
      </p>
      <p className="text-md italic text-blue-600">{service_id.name}</p>

      <div className="flex justify-end gap-2 mt-2">
        <Link to={`/bookings/${_id}/edit`}>
          <Pencil className="text-blue-600 hover:text-blue-800" size={20} />
        </Link>
        <button onClick={handleDelete}>
          <Trash2 className="text-red-600 hover:text-red-800" size={20} />
        </button>
      </div>
    </div>
  );
}
