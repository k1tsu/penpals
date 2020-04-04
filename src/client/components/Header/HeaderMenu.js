import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

const HeaderMenu = ({ visible, setVisible, switchTheme, changeLanguage, t, auth }) => (
  <Menu visible={visible} setVisible={setVisible}>
    <MenuItem link={auth.isAuthenticated ? '/' : '/login'}>
      {
        auth.isAuthenticated
          ? t('actions.alreadyLoggedIn')
          : t('actions.logIn')
      }
    </MenuItem>
    <MenuItem>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HeaderMenu);
