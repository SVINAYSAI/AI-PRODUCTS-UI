import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CompanyLayout from "../Company/CompanyLayout";
import CompanyDashboard from "../Company/CompanyDashboard";
// import { useEffect, useState } from "react";
import Companysettings from "../Company/Companysettings";
import CompanyUserPreview from "../Company/Company_page/company1_pages/Companyuser";

export default function CompanyRoute() {
  // const navigate = useNavigate();
  // const [manualRedirect, setManualRedirect] = useState(false);

  // useEffect(() => {
  //   // Manually check if the user has entered /dash@board and redirect them to /log/sign-in
  //   if (window.location.pathname.includes("/dash@board") && !manualRedirect) {
  //     navigate("/log/sign-in");
  //   }
  // }, [navigate, manualRedirect]);
  const user = {/* actual user data */ };
  const onComplaintClick = () => {/* actual implementation */ };
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyLayout />}>
          <Route path="/dash@board" element={<CompanyDashboard />} />
          {/* <Route path="/log/sign-in" element={<Navigate to="/log/sign-in" />} /> */}
          <Route path="/settings" element={<Companysettings />} />
          <Route path="/companyuser" element={<CompanyUserPreview />} />
        </Route>
      </Routes>
    </>
  );
}
