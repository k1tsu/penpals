import {
  FETCH_LETTERS_BEGIN,
  FETCH_LETTERS_SUCCESS,
  FETCH_LETTERS_FAILURE,
  ADD_LETTER
} from './lettersActions';

const initialState = {
  items: [{
    author: 'the Team 🌎',
    text: 'Welcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etc'
  }],
  error: false,
  loading: null
};

const lettersReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        loading: false,
        error: null,
        items: [
          ...state.items,
          action.payload
        ]
      };

    case FETCH_LETTERS_BEGIN:
      return {
        ...state.letters,
        loading: true,
        error: null
      };

    case FETCH_LETTERS_SUCCESS:
      return {
        ...state.letters,
        items: [
          ...state.items,
          action.payload
        ],
        loading: false,
        error: null
      };

    case FETCH_LETTERS_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default lettersReducer;
