import React from "react";
import SidebarWrapper, { ButtonWrapper } from "./styles";

const Buttons = () => {
  return (
    <ButtonWrapper>
      <ButtonWrapper.Item>Letters</ButtonWrapper.Item>
      <ButtonWrapper.Item>Send a new letter</ButtonWrapper.Item>
      <ButtonWrapper.Item>Dark Theme</ButtonWrapper.Item>
      <ButtonWrapper.Item>+ Send a letter</ButtonWrapper.Item>
    </ButtonWrapper>
  );
};

export default Buttons;
