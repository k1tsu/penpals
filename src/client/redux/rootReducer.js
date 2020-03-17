import { combineReducers } from 'redux';
import letters from './letters/lettersReducer';
import theme from './theme/themeReducer';

export default combineReducers({
  letters,
  theme
});
