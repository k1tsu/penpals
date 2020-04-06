import React from "react";
import SidebarWrapper from "./styles.jsx";
import Buttons from "./SidebarButtons";
import Profile from "./SidebarProfile";
import CurtainArrow from "./SidebarCurtainArrow";

class Sidebar extends React.Component {
  state = {
    isCollapsed: false
  };
  render() {
    return (
      <SidebarWrapper>
        <Profile collapsed={this.state.isCollapsed} />
        <CurtainArrow />
        <Buttons collapsed={this.state.isCollapsed} />
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
