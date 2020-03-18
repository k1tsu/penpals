import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import store from './redux/store';
import App from './App';
import Theme from './ThemeProvider';
import i18n from './i18n';

import './app.css';

ReactDOM.render((
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Theme>
        <App />
      </Theme>
    </I18nextProvider>
  </Provider>
), document.getElementById('root'));
