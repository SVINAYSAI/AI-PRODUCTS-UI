import { Routes, Route } from "react-router-dom";
import Layout from "../Products/Layout";
import "../Components/CSS/Tailwind.css";
import Textto3d from "../Products/Pages/3d_object/Text_to_3d";
import Texttochart from "../Products/Pages/chart/Text_to_chart";
import Chart from "../Products/Pages/chart/chart";
import TexttoImage from "../Products/Pages/image/Text_to_Image";
import Music from "../Products/Pages/music/music";
import TexttoVoice from "../Products/Pages/voice/text_to_voice";
import Transcripts from "../Products/Pages/Transcripts/Layout"
import Ann from "../Products/ann";
import Test from "../Products/Pages/Transcripts/test";

const Product = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
         <Route path="/image" element={<TexttoImage />} />
          <Route path="/voice" element={<TexttoVoice/>} />
          <Route path="/chart" element={<Texttochart/>} />
          <Route path="/3d" element={<Textto3d/>} />
          <Route path="/a" element={<Ann/>} />
          <Route path="/chart1" element={<Chart/>} />
          <Route path="/music" element={<Music />} />
          <Route path="/transcripts" element={<Transcripts />} />
          <Route path="/test" element={<Test />} />
        </Route>
    </Routes>
  );
};
export default Product;
