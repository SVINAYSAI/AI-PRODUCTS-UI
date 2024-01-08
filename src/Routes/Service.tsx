import { Routes, Route } from "react-router-dom";
import Layout from "../Service/Layout";

const Service = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};
export default Service;
