import React from 'react';
import StyledMenuWrapper from './styles';

const MobileMenu = ({ visible, children }) => (
  <StyledMenuWrapper visible={visible}>
    { children }
  </StyledMenuWrapper>
);

export default MobileMenu;
