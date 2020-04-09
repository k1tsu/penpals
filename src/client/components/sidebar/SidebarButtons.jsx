import React from "react";
import { ButtonWrapper } from "./styles";
import { connect } from "react-redux";
import { switchTheme } from "../../redux/actions/themeActions";

// In this case, a functional component is more appropriated, as
// the state won't change (the buttons will stay with the same names, emojis, and so)
// We can do a functional component the following way:

function Buttons({ theme, dispatch, ...props }) {
  const buttonNames = [
    "Letters",
    "Send a new letter",
    "Dark Theme",
    "+ Send a letter"
  ];

  const buttonActions = [null, null, () => dispatch(switchTheme()), null];

  const buttonNamesCollapsed = ["📥", "📧", "🌑", "🆕"];

  const collapseButtons = () => {
    if (props.collapsed === true) {
      return buttonNamesCollapsed.map(name => (
        <ButtonWrapper.Item
          onClick={buttonActions[buttonNamesCollapsed.indexOf(name)]}
          key={name}
        >
          {" "}
          {name}{" "}
        </ButtonWrapper.Item>
      ));
    } else {
      return buttonNames.map(name => (
        <ButtonWrapper.Item
          key={name}
          onClick={buttonActions[buttonNames.indexOf(name)]}
        >
          {" "}
          {name}{" "}
        </ButtonWrapper.Item>
      ));
    }
  };

  return <ButtonWrapper theme={theme}>{collapseButtons()}</ButtonWrapper>;
}

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Buttons);
