import React from "react";
import { ButtonWrapper } from "./styles";

// In this case, a functional component is more appropriated, as
// the state won't change (the buttons will stay with the same names, emojis, and so)
// We can do a functional component the following way:

function Buttons(props) {
  // this is your old state
  const buttonNames = [
    "Letters",
    "Send a new letter",
    "Dark Theme",
    "+ Send a letter"
  ]

  const buttonNamesCollapsed = [
    "📥", 
    "📧", 
    "🌑", 
    "🆕"
  ]
  
  // this is your function 
  const collapseButtons = () => {
    // we don't need the 'this' keyword anymore with functional components
    if(props.collapsed === true) {
      return buttonNamesCollapsed.map(name => (
        <ButtonWrapper.Item key={name}> {name} </ButtonWrapper.Item>
      ))
    } else {
      return buttonNames.map(name => (
        <ButtonWrapper.Item key={name}> {name} </ButtonWrapper.Item>
      ))
    }
  }

  // return, in this case, is just like render()
  return (
    <ButtonWrapper>
      { collapseButtons() }
    </ButtonWrapper>
  )
}

/* class Buttons extends React.Component {
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
} */

export default Buttons;
