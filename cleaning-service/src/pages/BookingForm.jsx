import { useState, useEffect, use } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import { createBooking, updateBooking, getBookings } from "../api/bookings";
import { fetchServices } from "../api/services";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

export default function BookingForm() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [services, setServices] = useState([]);

  const [formData, setFormData] = useState({
    customer_name: "",
    mobile_number: "",
    address: "",
    date_time: "",
    service_id: "",
  });

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  useEffect(() => {
    if (isEditMode) {
      // Load existing booking data
      getBookings(user.id).then((bookings) => {
        const existing = bookings.find((b) => b._id === id);
        if (existing) {
          setFormData({
            customer_name: existing.customer_name,
            mobile_number: existing.mobile_number,
            address: existing.address,
            date_time: existing.date_time.slice(0, 16),
            service_id: existing.service_id._id,
          });
        }
      });
    }
  }, [id, isEditMode, user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      user_id: user.id,
    };

    console.log("Form Data:", data); // Debugging line

    try {
      if (isEditMode) {
        await updateBooking(id, data);
        toast.success("Booking updated successfully!");
      } else {
        await createBooking(data);
        toast.success("Booking created successfully!");
      }
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="p-6 mt-12 bg-white shadow-md rounded-lg w-full max-w-xl">
        <button
          onClick={() => navigate("/")}
          className=" text-black px-4 py-2 rounded-lg hover:text-blue-600"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isEditMode ? "Edit Booking" : "New Booking"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            className="border w-full p-2 rounded"
            value={formData.customer_name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile_number"
            placeholder="Mobile Number"
            className="border w-full p-2 rounded"
            value={formData.mobile_number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border w-full p-2 rounded"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="date_time"
            className="border w-full p-2 rounded"
            value={formData.date_time}
            onChange={handleChange}
            required
          />
          <select
            name="service_id"
            className="border w-full p-2 rounded"
            value={formData.service_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
          >
            {isEditMode ? "Update Booking" : "Create Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
