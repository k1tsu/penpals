import React from "react";
import LetterViewWrapper, { TitleWrapper } from "./styles";

class Title extends React.Component {
  render() {
    return (
      <TitleWrapper>
        <TitleWrapper.Title>Test Title</TitleWrapper.Title>
        <p> 00/00/0000 </p>
      </TitleWrapper>
    );
  }
}

export default Title;
