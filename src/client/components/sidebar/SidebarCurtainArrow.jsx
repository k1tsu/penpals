import React from "react";
import SidebarWrapper, { ArrowWrapper } from "./styles";

class CurtainArrow extends React.Component {
  render() {
    return (
      <ArrowWrapper>
        <ArrowWrapper.Icon
          style={{ marginLeft: this.directionMarginChange() }}
          onClick={() => this.props.onCollapse()}
        >
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
  directionMarginChange() {
    if (this.props.collapsed) {
      return "0%";
    } else {
      return "10%";
    }
  }

  onCollapse() {}
}

export default CurtainArrow;
