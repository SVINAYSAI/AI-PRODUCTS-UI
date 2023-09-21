import { Routes, Route } from "react-router-dom";
import "../Components/CSS/Tailwind.css";
import Layout from "../frontend/Layout";
import Home from "../frontend/pages/Home";
import OurTeam from "../frontend/Home/OurTeam";
import About from "../frontend/pages/About";
import Blog from "../frontend/pages/Blog";
import ContactUs from "../frontend/pages/ContactUs";
import Pricing from "../frontend/pages/Pricing";
import Chatbot1 from "../frontend/chatbot/chatbot";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/test" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/chatbot" element={<Chatbot1 />} />
      </Route>
    </Routes>
  );
};

export default FrontendRoute;
