import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${props => (props.collapsed ? "5vw" : "15vw")} 1fr;
  grid-template-rows: 100vh;
`;

const Wrapper = styled.div`
  top: 0;
  margin: 0;
  display: flex;
  grid-column: 2 / 3;
  height: 100%;
  justify-content: ${props => (props.horizontal ? "center" : null)};
  align-items: ${props => (props.vertical ? "center" : null)};
  flex-direction: ${props => props.flexDirection || "row"};
  background-color: ${props => props.theme.secondaryColor};
`;

const ContentWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export {
  ContentWrapper,
  Wrapper,
  Grid
};
