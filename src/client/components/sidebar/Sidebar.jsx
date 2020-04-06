import React from "react";
import SidebarWrapper from "./styles.jsx";
import Buttons from "./SidebarButtons";
import Profile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div>
      <Profile />
      <Buttons />
    </div>
  );
};

export default Sidebar;
