import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
    position: absolute;
    top: 100%;
    width: 15vw;
    height: auto;
    display: ${props => (props.visible ? 'grid' : 'none')};
    grid-template-columns: 50% 50%; 
    background-color: white;
    border-radius: 5px;
    z-index: 30;
    box-shadow: 0 5px 10px rgba(0,0,0,.05), 
                0 15px 40px rgba(0,0,0,.2);

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

const Dropdown = ({ visible, children, ...props }) => (
  <StyledDropdown visible={visible} {...props}>
    { children }
  </StyledDropdown>
);

export default Dropdown;
