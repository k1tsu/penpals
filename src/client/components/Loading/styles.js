import styled from 'styled-components';

const LoadingStyled = styled.div`
  position: ${props => (props.fullscreen ? 'absolute' : null)};
  width: ${props => (props.fullscreen ? '100vw' : 'inherited')};
  height: ${props => (props.fullscreen ? '100vh' : 'inherited')};
  background-color: black;
  opacity: 0.6;
`;

export default LoadingStyled;
