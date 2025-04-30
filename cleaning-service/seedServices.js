import dotenv from "dotenv";
import mongoose from "mongoose";
import Service from "./src/server/models/Service.js";

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const servicesData = [
  { name: "Deep Cleaning" },
  { name: "Carpet Cleaning" },
  { name: "Windows Cleaning" },
  { name: "Bathroom Sanitization" },
  { name: "Sofa Cleaning" },
];

async function seedServices() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");

    // Check if services already exist
    const existingServices = await Service.find();
    if (existingServices.length > 0) {
      console.log("Services already seeded.");
      return;
    }

    // Seed services
    await Service.insertMany(servicesData);
    console.log("Services seeded successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding error:", error);
  }
}

seedServices();
