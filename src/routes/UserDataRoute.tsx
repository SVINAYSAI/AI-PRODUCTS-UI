import { Routes, Route } from "react-router-dom";
import "../Components/CSS/Tailwind.css"
import Login from "../frontend/User data/Login";


const ApiRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    );
  };
  export default ApiRoute;