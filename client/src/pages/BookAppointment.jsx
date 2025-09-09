import { useState } from "react";
import { doctorData } from "../data/doctor.js";

function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleBookClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <hr />
      <p>Please select a date and time for your appointment.</p>

      <div className="row gap-2">
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            className="card shadow-sm"
            style={{ maxWidth: "400px" }}
          >
            <div className="card-body m-0 p-3 text-center">
              <img
                src={doctor.image}
                className="card-img-top img-fluid h-auto w-50"
                alt="Doctor"
              />
              <hr />
              <h5 className="card-title">
                {doctor.first_name} {doctor.last_name} - {doctor.specialization}
              </h5>
              <p className="card-text mb-1">
                <strong>Contact:</strong> {doctor.contact_number}
              </p>
              <p className="card-text mb-3">
                <strong>Email:</strong> {doctor.email}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleBookClick(doctor)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal fade show d-block"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                {selectedDoctor && (
                  <>
                    <h6>
                      Dr. {selectedDoctor.first_name}{" "}
                      {selectedDoctor.last_name}
                    </h6>
                    <p>
                      <strong>Specialization:</strong>{" "}
                      {selectedDoctor.specialization}
                    </p>
                    <hr />
                    <h6>Available Schedules</h6>
                    <ul>
                      <li>Monday - 9:00 AM to 12:00 PM</li>
                      <li>Wednesday - 2:00 PM to 5:00 PM</li>
                      <li>Friday - 10:00 AM to 1:00 PM</li>
                    </ul>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-success" onClick={closeModal}>
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
