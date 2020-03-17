import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import Logo from '../components/Logo/Logo';
import { switchTheme } from '../redux/theme/themeActions';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';

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

  return (
    <StyledHeader theme={theme}>
      <Logo />
      <Menu visible={visible} setVisible={setVisible}>
        <MenuItem onClick={() => dispatch(switchTheme())}>
          { theme.isDarkMode ? ' 🌞 Light mode ' : '🌙 Dark mode '}
        </MenuItem>
      </Menu>
      <Title text={text || 'Good afternoon!'} />
      <Subtitle text="It looks like you have new messages..." />
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
