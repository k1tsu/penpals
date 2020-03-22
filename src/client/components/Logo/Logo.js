import React from 'react';
import coloredLogo from '../../assets/icon.svg';
import StyledLogo from './styles';

/*
  This component renders the logo. It still needs some improvements,
  like the support for custom size, custom effects, and so on...
*/

const Logo = props => (
  <StyledLogo
    src={coloredLogo}
    alt=""
    {...props}
  />
);

export default Logo;
