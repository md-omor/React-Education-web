import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";
import "./Nav.css";

const Main_navbar = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SubMenu />
    </div>
  );
};

export default Main_navbar;
