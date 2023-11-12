
import CompanyPricing from "./Company_page/price";
import CompanyThTable from "./Company_page/companythtable";
export default function CompanyDashboard() {

  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
      <CompanyPricing/>
        <CompanyThTable/>
      </div>
    </>
  );
}