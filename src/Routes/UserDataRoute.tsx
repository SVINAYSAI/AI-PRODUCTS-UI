import { Routes, Route } from "react-router-dom";
import "../components/CSS/sketchfab.css"
import Forgot from "../HOME/MainPages/User_data/Forgot";
import Login from "../HOME/MainPages/User_data/Login";
import NewPassword from "../HOME/MainPages/User_data/NewPassword";
import OTP from "../HOME/MainPages/User_data/OTP";
import Register from "../HOME/MainPages/User_data/Register";

const ApiRoute = () => {
    return (
      <Routes>
        <Route path="/sign-in" element={<Login/>}></Route>
        <Route path="/sign-up" element={<Register/>}></Route>
        <Route path="/forgot" element={<Forgot/>}></Route>
        <Route path="/newpw" element={<NewPassword/>}></Route>
        <Route path="/otp" element={<OTP />}></Route>
      </Routes>
    );
  };
  export default ApiRoute;