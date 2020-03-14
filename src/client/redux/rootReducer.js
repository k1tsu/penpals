import { CHANGE_TEXT, ADD_LETTER } from './actions';

const initialState = {
  text: 'Good afternoon!',
  letters: [{
    author: 'the Team 🌎',
    text: 'Welcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etc'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { text: action.value };
    case ADD_LETTER:
      return {
        ...state,
        letters: [action.value, ...state.letters]
      };
    default:
      return state;
  }
};

export default reducer;
