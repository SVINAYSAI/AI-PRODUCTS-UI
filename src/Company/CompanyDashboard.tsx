import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import CompanyPricing from "./Company_page/price";
import CompanyThTable from "./Company_page/companythtable";

const CompanyDashboard: React.FC = () => {
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
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <CompanyPricing />
        <CompanyThTable />
      </div>
    </>
  );
};

export default CompanyDashboard;
