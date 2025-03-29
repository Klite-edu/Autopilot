import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CRMDashboard from "./CRM/CRMDarshboard/CRMDashboard.jsx";
import PipelinesDashboard from "./Pipelines/PipelinesDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/crm" element={<CRMDashboard />} />
        <Route path="/pipelines" element={<PipelinesDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
