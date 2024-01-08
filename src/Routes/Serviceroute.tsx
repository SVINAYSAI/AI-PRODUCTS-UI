import { Routes, Route } from "react-router-dom";
import Service from "../Service/Service";



const Serviceroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Service />}></Route>
    </Routes>
  );
};
export default Serviceroute;
