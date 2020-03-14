export const CHANGE_TEXT = 'CHANGE_TEXT';

export const ADD_LETTER = 'ADD_LETTER';

export const changeText = value => ({
  type: CHANGE_TEXT, value
});

export const addLetter = () => ({
  type: ADD_LETTER, value: { author: 'Hey', text: 'other text here...' }
});
