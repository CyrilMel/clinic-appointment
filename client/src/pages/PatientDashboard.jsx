function Dashboard() {
  return (
    <div>
      <h4>Dashboard</h4>
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
    </div>
  );
}

export default Dashboard;
