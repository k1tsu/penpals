import React from 'react';
import LetterHeader from './LetterHeader';
import LetterBody from './LetterBody';
import { StyledLetter } from './styles';

const Letter = ({ first, last, letter }) => {
  // eslint-disable-next-line react/jsx-one-expression-per-line
  const multilinedText = letter.text.split('\\n').map(item => (<>{item}<br /></>));
  const { author } = letter;

  return (
    <StyledLetter
      first={first}
      last={last}
    >
      <LetterHeader author={author} />
      <LetterBody text={multilinedText} />
    </StyledLetter>
  );
};

export default Letter;
