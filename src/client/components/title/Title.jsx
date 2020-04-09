import React from "react";
import { Frame } from "framer";
import { TextWrapper, Text } from "./styles";
import { withTheme } from "styled-components";

/**
 * This element will render a 30px, sans-serif text.
 * It works great for texts who needs some attention and so.
 */
const Title = ({ children }) => {
  // future animations
  const string = children.split("");

  return (
    <TextWrapper>
      <Frame
        initial={{ y: 27.5 * 1.2, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        overflow="hidden"
        transition={{ ease: "fadeOut", duration: 0.6 }}
        background=""
        width="25%"
        height="20%"
      >
        <Text>{ children }</Text>
      </Frame>
    </TextWrapper>
  );
};

export default withTheme(Title);
