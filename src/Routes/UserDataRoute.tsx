import { Routes, Route } from "react-router-dom";
import "../components/CSS/sketchfab.css";
import Forgot from "../HOME/MainPages/User_data/Forgot";
import Login from "../HOME/MainPages/User_data/Login";
import NewPassword from "../HOME/MainPages/User_data/NewPassword";
import OTP from "../HOME/MainPages/User_data/OTP";
import Register from "../HOME/MainPages/User_data/Register";
import OTP_Verify from "../HOME/MainPages/User_data/OTP_Verify";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ApiRoute = () => {
  const [cookies, setCookie] = useCookies(["email"]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the formData cookie exists
    const formDataCookie = cookies.email;

    if (!formDataCookie) {
      // If the cookie does not exist, navigate to the login page
      navigate("/log/sign-in");
    }
  }, [cookies.email, navigate]);

  return (
    <Routes>
      <Route path="/sign-in" element={<Login />}></Route>
      <Route path="/sign-up" element={<Register />}></Route>
      <Route path="/forgot" element={<Forgot />}></Route>
      <Route path="/newpw" element={<NewPassword />}></Route>
      <Route path="/otp" element={<OTP />}></Route>
      <Route path="/otp_verify" element={<OTP_Verify />}></Route>
    </Routes>
  );
};
export default ApiRoute;
