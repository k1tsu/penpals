import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ececec;
  display: flex;
`;

const Wrapper = styled.div`
  top: 0;
  margin-left: 10%;
  display: flex;
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

export { ContentWrapper, Wrapper, Grid };
