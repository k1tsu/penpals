import React from "react";
import { Frame } from "framer";
import { Text, TextWrapper } from "./styles";
import { withTheme } from "styled-components";

/**
 * This element will render a 15px, monospaced text.
 * It works great for texts with lots of words and so.
 */
const Description = ({ children }) => (
  <TextWrapper>
    <Frame
      initial={{ y: 15 * 1.2, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      overflow="hidden"
      transition={{ ease: "fadeOut", duration: 0.6 }}
      background=""
      width="25%"
      height="10%"
    >
      <Text>{ children }</Text>
    </Frame>
  </TextWrapper>
);

export default withTheme(Description);
