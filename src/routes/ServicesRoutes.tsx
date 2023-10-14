import { Routes, Route } from "react-router-dom";
import "../Components/CSS/Tailwind.css";
import Services from "../Services/pages/Services";
import Radio from "../Services/pages/Radio";
import Layout from "../Services/Layout";
import Accordion from "../Services/pages/accordion";

const ApiRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Services />} />
        <Route path="/choose/radio" element={<Radio />} />
        <Route path="/accordion" element={<Accordion/>}/>
      </Route>
    </Routes>
  );
};
export default ApiRoute;
