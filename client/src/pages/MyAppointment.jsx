import { useState } from "react";
import { upcomingData } from "../data/upcomingData";

function MyAppointments() {
  const [showReschedule, setShowReschedule] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleRescheduleClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowReschedule(true);
  };

  const handleCloseModal = () => {
    setShowReschedule(false);
    setSelectedAppointment(null);
  };

  return (
    <div>
      <h1>My Appointments</h1>

      {/* Upcoming Appointments */}
      <div className="shadow-sm rounded-3 border border-2 mt-3">
        <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
          <table className="table align-middle mb-0">
            <thead
              className="bg-secondary"
              style={{ position: "sticky", top: 0, zIndex: 1 }}
            >
              <tr>
                <th className="text-secondary fw-semibold">Doctor</th>
                <th className="text-secondary fw-semibold">Specialization</th>
                <th className="text-secondary fw-semibold">Date</th>
                <th className="text-secondary fw-semibold">Time</th>
                <th className="text-secondary fw-semibold">Reason</th>
                <th className="text-secondary fw-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingData.map((appointment) => (
                <tr key={appointment.appointment_id} className="hover-row">
                  <td>{appointment.doctor_name}</td>
                  <td>
                    <span className="badge bg-success-subtle text-success px-2 py-1 rounded-2">
                      {appointment.specialization}
                    </span>
                  </td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td
                    className="text-truncate"
                    style={{ maxWidth: "200px" }}
                  >
                    {appointment.reason_for_visit}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleRescheduleClick(appointment)}
                    >
                      Reschedule
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reschedule Modal */}
      {showReschedule && selectedAppointment && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reschedule Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Rescheduling appointment with{" "}
                  <strong>{selectedAppointment.doctor_name}</strong>
                </p>
                <label className="form-label">Choose new date</label>
                <input type="date" className="form-control mb-2" />
                <label className="form-label">Choose new time</label>
                <input type="time" className="form-control" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;
