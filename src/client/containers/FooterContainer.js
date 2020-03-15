import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    display: flex;
    width: 100vw;
    bottom: 0;
    height: 10vh;
    background-color: none;
`;

const FooterContainer = () => (
  <StyledFooter />
);

export default FooterContainer;
