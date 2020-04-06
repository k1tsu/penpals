import React from "react";
import SidebarWrapper from "./styles.jsx";
import Buttons from "./SidebarButtons";
import Profile from "./SidebarProfile";
import CurtainArrow from "./SidebarCurtainArrow";

class Sidebar extends React.Component {
  state = {
    isCollapsed: false
  };

  collapseAll = state => {
    let isCollapsed = undefined;
    if (this.state.isCollapsed) {
      isCollapsed = false;
      this.setState({ isCollapsed });
    } else {
      isCollapsed = true;
    }
    this.setState({ isCollapsed });
  };

  render() {
    return (
      <SidebarWrapper>
        <Profile collapsed={this.state.isCollapsed} />
        <CurtainArrow
          collapsed={this.state.isCollapsed}
          onCollapse={this.collapseAll}
        />
        <Buttons collapsed={this.state.isCollapsed} />
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
