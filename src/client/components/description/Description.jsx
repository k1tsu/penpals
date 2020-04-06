import React from "react";
import Text from "./styles";

/**
 * This element will render a 15px, monospaced text. 
 * It works great for texts with lots of words and so.
 */
const Description = ({ children }) => (
  <Text>{ children }</Text>
);

export default Description;
