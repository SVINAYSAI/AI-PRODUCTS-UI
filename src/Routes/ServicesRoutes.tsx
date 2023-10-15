import { Radio } from "antd";
import { Routes, Route } from "react-router-dom";
import Services from "../Services/pages/Services";
import Accordion from "../Services/pages/accordion";
import Test1 from "../Services/pages/text1";
import VideoEdit from "../Services/pages/video_edit";
import Layout from "../Services/Layout";

const ApiRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Services />} />
        <Route path="/choose/radio" element={<Radio />} />
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/video_edit" element={<VideoEdit/>}/>
        <Route path="/video_test" element={<Test1/>}/>
      </Route>
    </Routes>
  );
};
export default ApiRoute;
