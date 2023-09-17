import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Loader from './components/Loaders/Loader'
import Loader from "./components/Loaders/Loader";
import React from "react";


const App = () => {
  const ProductsRoute = lazy(() => import("./routes/ProductsRoute"));
  const FrontendRoute = lazy(() => import("./routes/FrontendRoute"));
  const ApiRoute = lazy(() => import("./routes/ApiRoute"));
  const ServicesRoute = lazy(() => import("./routes/ServicesRoutes"));
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/*" element={<FrontendRoute />} />
        <Route path="products/*" element={<ProductsRoute />} />
        <Route path="api/*" element={<ApiRoute />} />
        <Route path="ser/*" element={<ServicesRoute />} />
      </Routes>
    </Suspense>
  );
};
export default App;
