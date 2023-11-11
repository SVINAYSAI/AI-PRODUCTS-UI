import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HOME from "./Routes/FrontendRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import ServicesRoute from "./Routes/ServicesRoutes";
import APIsRoute from "./Routes//ApiRoute";
import UserDataRoute  from "./Routes/UserDataRoute";
import CompanyRoute from "./Routes/CompanyRoute";

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
        </Routes>
      </Router>
  );
};

export default App;
