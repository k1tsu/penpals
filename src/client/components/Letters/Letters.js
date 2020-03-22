import React from 'react';
import Letter from '../Letter/Letter';
import LettersWrapper from './styles';

const Letters = ({ letters: { items } }) => (
  <LettersWrapper>
    {
      items.map((letter, index) => (
        <Letter
          key={letter.author}
          first={index === 0}
          last={index === items.length - 1}
          letter={letter}
        />
      ))
    }
  </LettersWrapper>
);

export default Letters;
