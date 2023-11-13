import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HOME from "./Routes/FrontendRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import ServicesRoute from "./Routes/ServicesRoutes";
import APIsRoute from "./Routes//ApiRoute";
import UserDataRoute  from "./Routes/UserDataRoute";
import CompanyRoute from "./Routes/CompanyRoute";
import Payment from "./Company/Payment";
import AdminLogin from "./Company/CompanyLogin/AdminLogin";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/*" element={<HOME />} />
          <Route path="/products*" element={<ProductsRoute />} />
          <Route path="/services*" element={<ServicesRoute />} />
          <Route path="/api*" element={<APIsRoute />} />
          <Route path="/log*" element={<UserDataRoute />} />
          <Route path="/our_dash@board*" element={<CompanyRoute />} />
          <Route path="/pay_ment@u*" element={<Payment />} />
          <Route path="/admin_sign@in" element={<AdminLogin />} />
        </Routes>
      </Router>
  );
};

export default App;
