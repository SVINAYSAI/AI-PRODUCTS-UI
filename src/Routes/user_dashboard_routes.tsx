import { Routes, Route } from "react-router-dom";
import Dashboard from "../user_dashboard/dashboard";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
      </Route>
    </Routes>
  );
};
export default DashboardRoute;
