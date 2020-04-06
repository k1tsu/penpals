import React from "react";
import Text from "./styles";

/**
 * This element will render a 30px, sans-serif text. 
 * It works great for texts who needs some attention and so.
 */
const Title = ({ children }) => (
  <Text>{ children }</Text>
);

export default Title;
