import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/PatientDashboard";
import BookAppointment from "../pages/BookAppointment";
import MyAppointments from "../pages/MyAppointment";
import Profile from "../pages/Profile";

function PatientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/appointments" element={<MyAppointments />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );    
}

export default PatientRoutes;
