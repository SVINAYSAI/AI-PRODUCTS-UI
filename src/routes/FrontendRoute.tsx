import { Routes, Route } from "react-router-dom";
import "../assets/frontend/css/style1.css";
import Home from "../frontend/pages/Home";
import Pricing from "../frontend/pages/Pricing";
import Test from "../frontend/pages/test";
import Login from "../frontend/Login Details/Login";
import Register from "../frontend/Login Details/Register";
import Forgot from "../frontend/Login Details/Forgot";
import Verify from "../frontend/Login Details/Verification";
import CreatePw from "../frontend/Login Details/CreatePw";
import Layout from "../frontend/Layout";
import About from "../frontend/pages/About";
import ContactUs from "../frontend/pages/ContactUs";
import Blog from "../frontend/pages/Blog";

const FrontendRoute = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createpw" element={<CreatePw />} />
      <Route path="/test" element={<Test />} />
      
    </Routes>
  );
};

export default FrontendRoute;
