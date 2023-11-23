import { Routes, Route} from "react-router-dom";
import CompanyLayout from "../Company/CompanyLayout";
import CompanyDashboard from "../Company/CompanyDashboard";
import Companysettings from "../Company/Companysettings";
import CompanyUserPreview from "../Company/Company_page/company1_pages/Companyuser";
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function CompanyRoute() {


    const [cookies, setCookie] = useCookies(['formData']);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Check if the formData cookie exists
      const formDataCookie = cookies.formData;
  
      if (!formDataCookie) {
        // If the cookie does not exist, navigate to the login page
        navigate('/log/sign-in');
      }
    }, [cookies.formData, navigate]);

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
