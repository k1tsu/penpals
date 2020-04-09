import styled from "styled-components";

const TextWrapper = styled.div`
  height: 29px;
  overflow: hidden;
  font-size: 27.5px;
  margin-left: 5%;
`;

const Text = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 27.5px;
  text-align: left;
  color: ${props => props.theme.textPrimary};
`;

export {
  TextWrapper,
  Text
};
