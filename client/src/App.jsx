import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/SidebarClient";
import PatientRoutes from "./router/PatientRouter";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">   
          <PatientRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
