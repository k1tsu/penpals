import React from "react";
import SidebarWrapper, { ArrowWrapper } from "./styles";

class CurtainArrow extends React.Component {
  render() {
    return (
      <ArrowWrapper>
        <ArrowWrapper.Icon onClick={() => this.props.onCollapse()}>
          {" "}
          {this.directionString()}{" "}
        </ArrowWrapper.Icon>
      </ArrowWrapper>
    );
  }
  directionString() {
    if (this.props.collapsed) {
      return "→";
    } else {
      return "←";
    }
  }

  onCollapse() {}
}

export default CurtainArrow;
