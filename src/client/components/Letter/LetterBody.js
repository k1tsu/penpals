import React from 'react';
import LetterText from './LetterText';
import { StyledLetterBody } from './styles';

const LetterBody = ({ text }) => (
  <StyledLetterBody>
    <LetterText body text={text} key={text} />
  </StyledLetterBody>
);

export default LetterBody;
