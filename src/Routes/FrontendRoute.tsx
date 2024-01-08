import { Routes, Route } from "react-router-dom";
import Layout from "../HOME/Layout";
import About from "../HOME/MainPages/About";
import Home from "../HOME/MainPages/Home";
import Blog from "../HOME/MainPages/Blog";
import ContactUs from "../HOME/MainPages/ContactUs";
import Pricing from "../HOME/MainPages/Pricing";
import Service from "../Service/Service";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/test" element={<OurTeam />} />
        <Route path="/chatbot" element={<Chatbot1 />} /> */}
      </Route>
    </Routes>
  );
};

export default FrontendRoute;
