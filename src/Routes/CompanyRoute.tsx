import { Routes, Route } from "react-router-dom";
import CompanyLayout from "../Company/CompanyLayout";
import CompanyDashboard from "../Company/CompanyDashboard";

export default function CompanyRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyLayout />}>
          <Route path="/dash@board" element={<CompanyDashboard />} />
        </Route>
      </Routes>
    </>
  );
}
