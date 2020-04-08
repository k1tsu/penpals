import React from "react";
import NavbarButtonWrapper, { ProfileImage } from "./styles";

class NavbarButtons extends React.Component {
  render() {
    return (
      <NavbarButtonWrapper>
        <ProfileImage src="https://i.picsum.photos/id/392/200/200.jpg" />
        <NavbarButtonWrapper.Button> 📥 </NavbarButtonWrapper.Button>
        <NavbarButtonWrapper.Button> 📧 </NavbarButtonWrapper.Button>
        <NavbarButtonWrapper.Button> 🌑 </NavbarButtonWrapper.Button>
        <NavbarButtonWrapper.Button> 🆕 </NavbarButtonWrapper.Button>
      </NavbarButtonWrapper>
    );
  }
}

export default NavbarButtons;
