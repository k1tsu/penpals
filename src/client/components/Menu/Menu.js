/* eslint-disable react/no-children-prop */
import React from 'react';
import { withTheme } from 'styled-components';
import { isBrowser } from 'react-device-detect';
import StyledMenu, { Dropdown, HamburgerMenu } from './styles';

/*
  This component renders the Menu div, which includes the icon and the menu itself.
*/

const Menu = ({ visible, setVisible, children }) => {
  const handleClick = () => setVisible(!visible);

  // Currently not working. I'll work on this later.
  const handleKeyDown = e => e.keyCode === 27 && setVisible(!visible);

  const MenuController = props => (
    isBrowser
      ? <Dropdown {...props} />
      : <HamburgerMenu {...props} />
  );

  return (
    <StyledMenu onKeyDown={handleKeyDown} onClick={handleClick}>
      <p> ≡ </p>
      <MenuController visible={visible}>
        { children }
      </MenuController>
    </StyledMenu>
  );
};

export default withTheme(Menu);
