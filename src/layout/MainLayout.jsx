import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";



const MainLayout = () => {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>

      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>

    </div>
  );
};

export default MainLayout;