/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { switchTheme } from '../../redux/actions/themeActions';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Logo from '../Logo/Logo';
import HeaderMenu from './HeaderMenu';
import StyledHeader from './styles';

/*
  Handles all the header components.
*/

const Header = ({ theme, dispatch, title, subtitle, small = false }) => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <StyledHeader theme={theme} small={small}>
      <Logo />
      <HeaderMenu
        visible={visible}
        setVisible={setVisible}
        switchTheme={() => dispatch(switchTheme())}
        changeLanguage={lang => i18n.changeLanguage(lang)}
        t={sentence => t(sentence)}
      />
      <Title text={title} />
      { !small && <Subtitle text={subtitle} /> }
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Header);
