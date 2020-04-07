import React from "react";
import { Text, TextWrapper } from "./styles";
import { Frame } from "framer";

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

export default Description;
