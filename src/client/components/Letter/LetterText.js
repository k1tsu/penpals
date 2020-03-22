import React from 'react';
import { StyledLetterText } from './styles';

// eslint-disable-next-line no-unused-vars
const LetterText = ({ author = false, body = false, text }) => (
  <StyledLetterText>
    { text }
  </StyledLetterText>
);

export default LetterText;
