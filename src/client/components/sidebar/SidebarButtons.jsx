import React from "react";
import SidebarWrapper, { ButtonWrapper } from "./styles";

class Buttons extends React.Component {
  state = {
    buttonNames: [
      "Letters",
      "Send a new letter",
      "Dark Theme",
      "+ Send a letter"
    ],
    buttonNamesCollapsed: ["📥", "📧", "🌑", "🆕"]
  };
  render() {
    return <ButtonWrapper>{this.collapseButtons()}</ButtonWrapper>;
  }
  collapseButtons() {
    if (this.props.collapsed === true) {
      return this.state.buttonNamesCollapsed.map(name => (
        <ButtonWrapper.Item key={name}> {name} </ButtonWrapper.Item>
      ));
    } else if (this.props.collapsed === false) {
      return this.state.buttonNames.map(name => (
        <ButtonWrapper.Item key={name}> {name} </ButtonWrapper.Item>
      ));
    }
  }
}

export default Buttons;
