import { combineReducers } from 'redux';
import letters from './reducers/lettersReducer';
import theme from './reducers/themeReducer';
import auth from './reducers/authReducer';

export default combineReducers({
  letters,
  theme,
  auth
});
