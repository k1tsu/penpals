/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import Logo from '../components/Logo/Logo';
import { switchTheme } from '../redux/theme/themeActions';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';

/* 
  This container handles all the header components and
  its corresponding states.
*/

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 40%;
    background-color: ${props => props.theme.primaryColor};

    & > * {
      margin: 0;
      margin-left: 10%;
      margin-right: 10%;
    }

    & > div { 
      position: absolute;
      right: 0;
      width: auto;
      height: auto;
    }
`; // div refers to the Dropdown component

const Header = ({ text, theme, dispatch }) => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <StyledHeader theme={theme}>
      <Logo />
      <Menu visible={visible} setVisible={setVisible}>
        <MenuItem>
          { t('actions.myProfile') }
        </MenuItem>
        <MenuItem>
          🖊️ { t('actions.sendLetter') }
        </MenuItem>
        <MenuItem>
          👉 { t('actions.aboutUs') }
        </MenuItem>
        <MenuItem onClick={() => dispatch(switchTheme())}>
          { t('actions.switchColorMode') }
        </MenuItem>
        <MenuItem half onClick={() => i18n.changeLanguage('en')}>
          EN
        </MenuItem>
        <MenuItem half onClick={() => i18n.changeLanguage('pt')}>
          PT
        </MenuItem>
      </Menu>
      <Title text={t('greetings.afternoon')} />
      <Subtitle text={t('greetings.hasLetters')} />
    </StyledHeader>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  text: state.text,
  theme: state.theme
});

export default connect(mapStateToProps)(Header);
