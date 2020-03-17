/* eslint-disable react/no-children-prop */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import MenuController from './MenuController';

const StyledMenu = styled.div`
  display: flex;
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
