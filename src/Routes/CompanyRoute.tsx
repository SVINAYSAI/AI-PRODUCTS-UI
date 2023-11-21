import { Routes, Route} from "react-router-dom";
import CompanyLayout from "../Company/CompanyLayout";
import CompanyDashboard from "../Company/CompanyDashboard";
import Companysettings from "../Company/Companysettings";
import CompanyUserPreview from "../Company/Company_page/company1_pages/Companyuser";

export default function CompanyRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyLayout />}>
          <Route path="/dash@board" element={<CompanyDashboard />} />
          <Route path="/settings" element={<Companysettings />} />
          <Route path="/companyuser" element={<CompanyUserPreview />} />
        </Route>
      </Routes>
    </>
  );
}
