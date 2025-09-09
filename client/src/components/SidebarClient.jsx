import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <h4 className="text-primary">Patient Panel</h4>
      <p className="text-secondary mb-2">Welcome, <strong>Patient!</strong></p>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/book" className="nav-link">Book Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/appointments" className="nav-link">My Appointments</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </li>
      </ul>
      <div>
        <a href="#" className="nav-link-logout text-danger">
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
