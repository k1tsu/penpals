import React from 'react';
import LetterText from './LetterText';
import { StyledLetterHeader } from './styles';

const LetterHeader = ({ author }) => (
  <StyledLetterHeader>
    <LetterText author text={`From ${author}`} key={author} />
  </StyledLetterHeader>
);

export default LetterHeader;
