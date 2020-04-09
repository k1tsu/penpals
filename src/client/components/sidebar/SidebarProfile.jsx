import React from "react";
import SidebarWrapper, { ProfileWrapper } from "./styles";
import { withTheme } from "styled-components";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <ProfileWrapper>
        <ProfileWrapper.Image src="https://i.picsum.photos/id/250/200/200.jpg" />
        {this.collapseProfile()}
      </ProfileWrapper>
    );
  }
  collapseProfile() {
    if (this.props.collapsed === false) {
      return <ProfileWrapper.Name theme={this.props.theme}> Test </ProfileWrapper.Name>;
    }
  }
}

export default withTheme(Profile);
