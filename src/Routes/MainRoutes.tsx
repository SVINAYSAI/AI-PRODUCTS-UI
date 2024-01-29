import { Routes, Route } from "react-router-dom";
import Navbar from "../MainUserDashBoard/UserDashBoard/Navbar";
import Test from "../MainUserDashBoard/UserDashBoard/test";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default FrontendRoute;
