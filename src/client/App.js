import React from 'react';
import styled, { withTheme } from 'styled-components';
import LettersContainer from './containers/LettersContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
`;

const App = () => (
  <Wrapper>
    <HeaderContainer />
    <LettersContainer />
    <FooterContainer />
  </Wrapper>
);

export default withTheme(App);
