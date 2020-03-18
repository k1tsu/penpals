/* eslint-disable react/no-children-prop */
import React from 'react';
import { isBrowser } from 'react-device-detect';
import Dropdown from '../Dropdown/Dropdown';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

/* 
  This component checks if the user is using a mobile browser and then
  renders the correct menu - either a Dropdown, for desktop users, or
  a HamburgerMenu, for anybody else.
*/

const MenuController = ({ visible, children }) => (
  isBrowser
    ? <Dropdown visible={visible} children={children} />
    : <HamburgerMenu visible={visible} children={children} />
);

export default MenuController;
