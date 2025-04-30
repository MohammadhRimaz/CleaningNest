import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import BookingForm from "./pages/BookingForm";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <ClerkLoading>
        <div className="text-center mt-10 text-xl">Loading...</div>
      </ClerkLoading>

      <ClerkLoaded>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/bookings/new" element={<BookingForm />} />
          <Route path="/bookings/:id/edit" element={<BookingForm />} />
        </Routes>
      </ClerkLoaded>
    </>
  );
}
