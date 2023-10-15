import { Routes, Route } from "react-router-dom";
import "../components/CSS/Tailwind.css";
import Services from "../Services/pages/Services";
import Radio from "../Services/pages/Radio";
import Layout from "../Services/Layout";
import Accordion from "../Services/pages/accordion";
import VideoEdit from "../Services/pages/video_edit";
import Test1 from "../Services/pages/text1";

const ApiRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Services />} />
        <Route path="/choose/radio" element={<Radio />} />
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/video_edit" element={<VideoEdit/>}/>
        <Route path="/video_test" element={<Test1/>}/>
      </Route>
    </Routes>
  );
};
export default ApiRoute;
