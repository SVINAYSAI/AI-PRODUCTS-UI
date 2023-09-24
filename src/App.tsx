import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import Loader from "./Components/Loaders/Loader";
import UserDataRoute from "./routes/UserDataRoute";
import FrontendRoute from "./routes/FrontendRoute";
import ServicesRoute from "./routes/ServicesRoutes";
import APIsRoute from "./routes/ApiRoute";
import ProductsRoute from "./routes/ProductsRoute";
import Test from "./frontend/pages/test";

const App = () => {
  // const FrontendRoute = lazy(() => import("./routes/FrontendRoute"));
  // const ServicesRoute = lazy(() => import("./routes/ServicesRoutes"));
  // const ProductsRoute = lazy(() => import("./routes/ProductsRoute"));
  // const APIsRoute = lazy(() => import("./routes/ApiRoute"));
  return (
    // <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/*" element={<FrontendRoute />} />
          <Route path="/services*" element={<ServicesRoute />} />
          <Route path="/products*" element={<ProductsRoute />} />
          <Route path="/api*" element={<APIsRoute />} />
          <Route path="/log*" element={<UserDataRoute />} />
          <Route path="/testt*" element={<Test />} />
        </Routes>
      </Router>
    //  </Suspense>
  );
};

export default App;
