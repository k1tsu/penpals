import { combineReducers } from 'redux';
import letters from './letters/lettersReducer';
import styles from './styles/stylesReducer';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { text: action.value };

    default:
      return state;
  }
};

export default combineReducers({
  reducer,
  letters,
  styles
});
