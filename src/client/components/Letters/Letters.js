import React from 'react';
import Letter from '../Letter/Letter';
import LettersWrapper from './styles';

const Letters = ({ letters }) => (
  <LettersWrapper>
    <Letter initial first />
    {
      letters.items.map((letter, index) => (
        <Letter
          onClick={ () => window.location.pathname = letter._id }
          key={letter.author}
          last={index === letters.items.length - 1}
          letter={letter}
        />
      ))
    }
  </LettersWrapper>
);

export default Letters;
