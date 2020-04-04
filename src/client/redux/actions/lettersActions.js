import firebase from '../../firebase/firebase';

export const FETCH_LETTERS_BEGIN = 'FETCH_LETTERS_BEGIN';
export const FETCH_LETTERS_SUCCESS = 'FETCH_LETTERS_SUCCESS';
export const FETCH_LETTERS_FAILURE = 'FETCH_LETTERS_FAILURE';

export const ADD_LETTER = 'ADD_LETTER';

export const addLetter = () => ({
  type: ADD_LETTER, payload: { author: 'Hey', text: 'other text here...' }
});

export const fetchLettersBegin = () => ({
  type: FETCH_LETTERS_BEGIN
});

export const fetchLettersSuccess = letters => ({
  type: FETCH_LETTERS_SUCCESS,
  payload: letters
});

export const fetchLettersFailure = error => ({
  type: FETCH_LETTERS_FAILURE,
  payload: error
});

export const fetchReceivedLetters = userUid => async (dispatch) => {
  dispatch(fetchLettersBegin);

  fetch(`http://localhost:8000/api/letters/user/${userUid}`) // not working yet.
    .then(data => data.json())
    .then(letters => dispatch(fetchLettersSuccess(letters)))
    .catch(err => fetchLettersFailure(err));
};
