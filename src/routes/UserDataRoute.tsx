import { Routes, Route } from "react-router-dom";
import "../Components/CSS/Tailwind.css"
import Login from "../frontend/User_data/Login";
import Register from "../frontend/User_data/Register";
import Forgot from "../frontend/User_data/Forgot";
import NewPassword from "../frontend/User_data/NewPassword";
import OTP from "../frontend/User_data/OTP";
import "../Components/CSS/style.css"

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