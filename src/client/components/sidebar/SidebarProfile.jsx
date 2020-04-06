import React from "react";
import SidebarWrapper, { ProfileWrapper } from "./styles";

const Profile = props => {
  return (
    <ProfileWrapper>
      <ProfileWrapper.Image src="https://i.picsum.photos/id/250/200/200.jpg" />
      <ProfileWrapper.Name> Test </ProfileWrapper.Name>
    </ProfileWrapper>
  );
};

export default Profile;
