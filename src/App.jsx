import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CRMDashboard from "./CRM/CRMDarshboard/CRMDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/crm" element={<CRMDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
