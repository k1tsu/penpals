import React from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

const HeaderMenu = ({ visible, setVisible, switchTheme, changeLanguage, t }) => (
  <Menu visible={visible} setVisible={setVisible}>
    <MenuItem link="/profile">
      { t('actions.myProfile') }
    </MenuItem>
    <MenuItem link="/send-letter">
      { t('actions.sendLetter') }
    </MenuItem>
    <MenuItem link="/about-us">
      { t('actions.aboutUs') }
    </MenuItem>
    <MenuItem onClick={() => switchTheme()}>
      { t('actions.switchColorMode') }
    </MenuItem>
    <MenuItem half onClick={() => changeLanguage('en')}>
      EN
    </MenuItem>
    <MenuItem half onClick={() => changeLanguage('pt')}>
      PT
    </MenuItem>
  </Menu>
);

export default HeaderMenu;
