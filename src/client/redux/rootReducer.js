import { combineReducers } from 'redux';
import letters from './letters/lettersReducer';

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
  letters
});
