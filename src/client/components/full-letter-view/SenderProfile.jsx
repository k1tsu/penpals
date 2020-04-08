import React from "react";
import LetterViewWrapper, { SenderProfileWrapper } from "./styles";

class SenderProfile extends React.Component {
  render() {
    return (
      <SenderProfileWrapper>
        <SenderProfileWrapper.FromText> From: </SenderProfileWrapper.FromText>
        <SenderProfileWrapper.ProfilePicture src="https://i.picsum.photos/id/648/200/200.jpg" />
        <SenderProfileWrapper.SenderName>
          {" "}
          John Doe{" "}
        </SenderProfileWrapper.SenderName>
      </SenderProfileWrapper>
    );
  }
}

export default SenderProfile;
