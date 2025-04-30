# 🧼 Cleaning Service Management System

A full-stack web application for managing cleaning service bookings, built with a modern tech stack. It includes user authentication, booking management, an admin panel for oversight, and responsive design for seamless usability on all devices.

---

## 📸 Screenshots

| Sing-In Page                        | Booking Form                                    | Admin Panel                                        |
| ----------------------------------- | ----------------------------------------------- | -------------------------------------------------- |
| ![Sign In](/screenshots/SignIn.png) | ![Booking Form](/screenshots/New%20Booking.png) | ![Admin Panel](/screenshots/Booking Dashboard.png) |

---

## 🧰 Tech Stack

### Frontend:

- **React** (with Vite for blazing fast development)
- **Tailwind CSS** for utility-first responsive styling
- **Clerk Authentication** for user management
- **React Router** for client-side routing
- **React Hot Toast** for toast notifications

### Backend:

- **Express.js** – RESTful API server
- **MongoDB** with **Mongoose** – NoSQL database and schema modeling
- **Node.js** – Server runtime

---

## ✨ Features

- 🔐 **User Authentication** via Clerk
- 🧾 **Booking Creation, Editing, and Deletion**
- 📱 **Mobile Number Capture** for each booking
- 🛠 **Admin Panel** – view & delete all bookings
- 📆 **Date/Time Picker** for booking schedule
- 🎨 **Clean UI** with responsive Tailwind styling

---

## ⚙️ Installation & Setup

> Clone this repo and follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cleaning-service-app.git
cd cleaning-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create .env file in the root directorie(cleaning-service).

```ini
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/cleaning_service
CLERK_SECRET_KEY=your_clerk_secret_key

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Run the Application

```bash
npm run dev
```

Then open your browser to http://localhost:5173

## 📂 Folder Structure

```bash
cleaning-service/src
├── server/             # Express backend
    └── models/
    └── controllers/
    └── routes/
    └── server.js
```

## 🔗 Connect

Feel free to Connect with me!

- **Portfolio**: https://rimazportfolio.framer.website

- **LinkedIn**: https://www.linkedin.com/in/mohammadh-rimaz-28673327b
