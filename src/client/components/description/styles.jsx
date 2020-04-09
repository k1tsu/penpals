import styled from "styled-components";

const TextWrapper = styled.div`
  height: 17px;
  overflow: hidden;
  font-size: 15px;
  margin-left: 5%;
`;

const Text = styled.h3`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px;
  text-align: left;
  color: ${props => props.theme.textSecondary}
`;

export {
  Text,
  TextWrapper
};
