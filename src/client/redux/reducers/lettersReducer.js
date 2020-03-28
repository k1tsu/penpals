import {
  FETCH_LETTERS_BEGIN,
  FETCH_LETTERS_SUCCESS,
  FETCH_LETTERS_FAILURE,
  ADD_LETTER
} from '../actions/lettersActions';

const initialState = {
  items: [],
  current: {},
  error: false,
  loading: null
};

const lettersReducer = (state = initialState, action) => {
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
        ...state,
        loading: true,
        error: null
      };

    case FETCH_LETTERS_SUCCESS:
      return {
        ...state,
        items: [...new Set(state.items.concat(action.payload))],
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
