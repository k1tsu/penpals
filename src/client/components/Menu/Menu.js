/* eslint-disable react/no-children-prop */
import React from 'react';
import { withTheme } from 'styled-components';
import MenuController from './MenuController';
import { StyledMenu } from './styles';

/*
  This component renders the Menu div, which includes the icon and the menu itself.
  Please note the 'real' menu is being handled by the MenuController component.
  I'll rename this file later and check if there's a better way to achieve the desired results.
*/
 
const Menu = ({ visible, setVisible, children }) => (
  <StyledMenu onClick={() => setVisible(!visible)}>
    <p> ≡ </p>
    <MenuController visible={visible} children={children} />
  </StyledMenu>
);

export default withTheme(Menu);
