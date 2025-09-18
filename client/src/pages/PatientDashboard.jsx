import { pastData } from "../data/pastData";
import { useState } from "react";  


function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

    const totalPages = Math.ceil(pastData.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = pastData.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    };


  return (
    <div className="container mt-4">
      {/* Hero Banner */}
      <div className="position-relative rounded-3 bg-image">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></div>
        <div className="p-4 mt-3 position-relative">
          <p className="text-white">Welcome!</p>
          <h2>Patient Name.</h2>
          <p className="text-white">You have 3 upcoming appointments.</p>
          <h4 className="fw-bold fs-5">Channel a Doctor Here</h4>
          <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2 w-50 rounded-1"
              type="search"
              placeholder="Search for doctors, specialties, or services"
              aria-label="Search"
            />
            <button className="btn btn-primary px-4" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Previous Appointments */}
      <div
        className="shadow-sm rounded-3 border border-2 mt-3"
        style={{ height: "389px", display: "flex", flexDirection: "column" }}
      >
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
                <th className="text-secondary fw-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((appointment) => (
                <tr key={appointment.appointment_id} className="hover-row">
                  <td>{appointment.doctor_name}</td>
                  <td>
                    <span className="badge bg-primary-subtle text-primary px-2 py-1 rounded-2">
                      {appointment.specialization}
                    </span>
                  </td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td className="text-truncate" style={{ maxWidth: "200px" }}>
                    {appointment.reason_for_visit}
                  </td>
                  <td>
                    <a href={appointment.report_pdf} download className="btn btn-sm btn-outline-primary">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
          <tfoot className="border-top">
            <tr>
              <td colSpan="6">
                <div className="d-flex justify-content-end">
                <nav className="mt-2">
                  <div style={{ flexShrink: 0 }}>
                    <nav className="mb-2 me-2">
                      <ul className="pagination mb-0">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                          >
                            Previous
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                          <li
                            key={index + 1}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}

                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </nav>
                </div>
              </td>
            </tr>
          </tfoot>
        </div>
      </div>
  );
}

export default Dashboard;
