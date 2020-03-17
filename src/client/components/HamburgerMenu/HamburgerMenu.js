import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    display: ${props => (props.visible ? 'flex' : 'none')};
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 30;

    & > button {
      height: 20vh;
    }
`;

const MobileMenu = ({ visible, children }) => (
  <Wrapper visible={visible}>
    { children }
  </Wrapper>
);

export default MobileMenu;
