/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../components/Button/Button';
import { switchColorMode } from '../redux/styles/stylesActions';

const StyledFooter = styled.footer`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    bottom: 0;
    height: 10vh;
    background-color: none;
`;

const FooterContainer = ({ theme, dispatch }) => (
  <StyledFooter>
    <Button onClick={() => dispatch(switchColorMode())}>{ theme.isDarkMode ? '🌞 Light mode' : '🌙 Dark mode' }</Button>
  </StyledFooter>
);

const mapStateToProps = state => ({
  theme: state.styles
});

export default connect(mapStateToProps)(FooterContainer);
