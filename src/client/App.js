import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Theme from './ThemeProvider';
import store from './redux/store';
import GlobalStyles from './GlobalStyles';
import { Routes } from './views';

/**
 * @requires module:./view/Routes
 * @requires module:./GlobalStyles
 * @requires module:./i18n
 * @description App component. It'll render the routes and all the required context providers.
 */
const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Theme>
        <GlobalStyles />
        <Routes />
      </Theme>
    </I18nextProvider>
  </Provider>
);

export default App;
