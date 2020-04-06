import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    margin: 0;
    margin-left: 15%;
    display: flex;
    justify-content: ${props => (props.horizontal ? "center" : null)};
    align-items: ${props => (props.vertical ? "center" : null)};
    flex-direction: ${props => props.flexDirection || "row"};
    width: 85vw;
    height: 100%;
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
  Wrapper
};
