import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
    position: absolute;
    display: flex;
    top: 100%;
    width: 15vw;
    height: auto;
    background-color: white;
    display: ${props => (props.visible ? 'block' : 'none')};
    border-radius: 5px;
    z-index: 30;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      margin: auto;
      top: -1vh;
      border-style: solid;
      border-width: 0 15px 15px 15px;
      border-color: transparent transparent #FFFFFF transparent;
      z-index: -1;
    }
`;

const Dropdown = ({ visible, children }) => (
  <StyledDropdown visible={visible}>
    { children }
  </StyledDropdown>
);

export default Dropdown;
