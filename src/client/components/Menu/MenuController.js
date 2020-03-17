/* eslint-disable react/no-children-prop */
import React from 'react';
import { isBrowser } from 'react-device-detect';
import Dropdown from '../Dropdown/Dropdown';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const MenuController = ({ visible, children }) => (
  isBrowser
    ? <Dropdown visible={visible} children={children} />
    : <HamburgerMenu visible={visible} children={children} />
);

export default MenuController;
