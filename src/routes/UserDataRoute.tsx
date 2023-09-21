import { Routes, Route } from "react-router-dom";
import "../Components/CSS/Tailwind.css"
import Login from "../frontend/User data/Login";
import Register from "../frontend/User data/Register";
import Forgot from "../frontend/User data/Forgot";
import NewPassword from "../frontend/User data/NewPassword";
import OTP from "../frontend/User data/OTP";


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