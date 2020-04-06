import React from "react";
import SidebarWrapper, { ProfileWrapper } from "./styles";

class Profile extends React.Component {
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
      return <ProfileWrapper.Name> Test </ProfileWrapper.Name>;
    }
  }
}

export default Profile;
