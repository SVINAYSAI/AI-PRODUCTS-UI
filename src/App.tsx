import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HOME from "./Routes/FrontendRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import ServicesRoute from "./Routes/ServicesRoutes";
import APIsRoute from "./Routes//ApiRoute";
import UserDataRoute from "./Routes/UserDataRoute";
import CompanyRoute from "./Routes/CompanyRoute";
import AdminLogin from "./Company/CompanyLogin/AdminLogin";
import LoadingPage from "./HOME/MainPages/User_data/form/LoadingPage/LoadingPage";
import Payment from "./MainPayment/Payment";
import Upload from "./Company/Upload";
import Socialmedia from "./Social_Media/socialmedia";
import UploadPhoto from "./Social_Media/UploadPhoto";
import Serviceroute from "./Routes/Serviceroute";
import UploadText from "./Social_Media/UploadText";
import MicroPhone from "./Test/microphone";
// import PayButton from "./MainPayment/Pages/PayButton";
import PayButton from "./MainPayment/Pages/PayButton";
import IpInfoComponent from "./Test/IP";
import Pricing_Plan from "./HOME/MainPages/pricing_page/plain_details/Pricing_plan";
import OrderSummary from "./HOME/MainPages/pricing_page/pricing_plan/OrderSummary";
import DashboardRoute from "./Routes/user_dashboard_routes"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/*" element={<HOME />} />
        <Route path="/products/*" element={<ProductsRoute />} />
        <Route path="/services/*" element={<ServicesRoute />} />
        <Route path="/api/*" element={<APIsRoute />} />
        <Route path="/log/*" element={<UserDataRoute />} />
        <Route path="/our_dash@board/*" element={<CompanyRoute />} />
        <Route path="/admin_sign@in" element={<AdminLogin />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/re" element={<Upload />} />
        <Route path="/social" element={<Socialmedia />} />
        <Route path="/photo_upload" element={<UploadPhoto />} />
        <Route path="/service" element={<Serviceroute />} />
        <Route path="/upload_text" element={<UploadText />} />
        <Route path="/phone" element={<MicroPhone />} />
        <Route path="/pay" element={<PayButton />} />
        <Route path="/IP" element={<IpInfoComponent />} />
        <Route path="/PricingPlan" element={<Pricing_Plan />} />
        <Route path="/ordersummary" element={<OrderSummary />} />  */}
        <Route path="/Dashboard" element={<DashboardRoute />} /> 
      </Routes>
    </Router>
  );
};

export default App;
