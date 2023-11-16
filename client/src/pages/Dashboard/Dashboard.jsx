import { useState } from "react";
// import "./Dashboard.css";
import Main from "../../components/main/Main.js";

import Navbar from "../../components/navbar/Navbar.js";

import Sidebar from "../../components/sidebar/Sidebar.js";

const Dashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container1">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
