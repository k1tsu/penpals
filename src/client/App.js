import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux/store';
import LettersContainer from './containers/LettersContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <HeaderContainer />
      <LettersContainer />
      <FooterContainer />
    </Wrapper>
  </Provider>
);

export default App;
