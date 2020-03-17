import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';
import './app.css';
import Theme from './ThemeProvider';


ReactDOM.render((
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
), document.getElementById('root'));
