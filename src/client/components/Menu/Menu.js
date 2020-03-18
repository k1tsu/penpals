/* eslint-disable react/no-children-prop */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import MenuController from './MenuController';

/*
  This component renders the Menu div, which includes the icon and the menu itself. 
  Please note the 'real' menu is being handled by the MenuController component.
  I'll rename this file later and check if there's a better way to achieve the desired results.    
*/

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: ${props => (props.theme.isDarkMode ? 'white' : 'black')};

  &:hover {
    cursor: pointer;
  }
`;

const Menu = ({ visible, setVisible, children }) => (
  <StyledMenu onClick={() => setVisible(!visible)}>
    <p> ≡ </p>
    <MenuController visible={visible} children={children} />
  </StyledMenu>
);

export default withTheme(Menu);
