import React from "react";
import { connect } from "react-redux";
import SidebarWrapper from "./styles.jsx";
import Buttons from "./SidebarButtons";
import Profile from "./SidebarProfile";
import CurtainArrow from "./SidebarCurtainArrow";
import { collapseMenu, openMenu } from "../../redux/actions/themeActions";

// Hey! Your sidebar is looking great. I liked our collapsed version.
// As the grid needs to communicate with this component, I had to connect
// our Redux store with your component.

// The connect() function (on the last line of this file) will render our component
// with two new props. It's the 'isCollapsed', that works exactly as your isCollapsed state,
// and the dispatch() function. The dispatch function works as this.setState, but it'll
// take two actions I imported here.

// If you want to learn more about Redux, I can help you :)

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = action => props.dispatch(action);
    this.collapseAll = this.collapseAll.bind(this);
  }

  collapseAll = state => {
    const isCollapsed = this.props.theme.collapsed;

    if (isCollapsed) {
      // this is a Redux action that will send a 'message' to our store saying to collapse the menu.
      return this.dispatch(openMenu());
    }

    // this is another Redux action that will send a 'message' to our store saying to open the menu.
    return this.dispatch(collapseMenu());
  };

  render() {
    return (
      <SidebarWrapper collapsed={this.props.theme.collapsed}>
        <Profile collapsed={this.props.theme.collapsed} />
        <Buttons collapsed={this.props.theme.collapsed} />
        <CurtainArrow
          collapsed={this.props.theme.collapsed}
          onCollapse={this.collapseAll}
        />
      </SidebarWrapper>
    );
  }
}

export default connect(state => ({
  theme: state.theme
}))(Sidebar);
