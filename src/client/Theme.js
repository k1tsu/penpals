/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const Theme = ({ children, styles }) => (
  <ThemeProvider theme={styles}>
    { children }
  </ThemeProvider>
);

const mapStateToProps = state => ({
  styles: state.styles
});

export default connect(mapStateToProps)(Theme);
