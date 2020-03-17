/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Theme);
