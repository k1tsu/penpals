/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import LetterHeader from './LetterHeader';
import LetterBody from './LetterBody';

const StyledLetter = styled.div`
    display: inline-block;
    cursor: pointer;
    margin-left: ${props => (props.first ? '10%' : '1%')};
    margin-right: ${props => (props.last ? '1%' : '0')};
    width: 15vw;
    height: 95%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (max-width: 1200px) {
      width: 40vw;
      margin-left: ${props => (props.first ? '10%' : '2.5%')};
      margin-right: ${props => (props.last ? '2.5%' : '0')};
    };
`;

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

Letter.propTypes = {
  first: propTypes.bool.isRequired,
  last: propTypes.bool.isRequired,
  author: propTypes.bool.isRequired,
  letter: propTypes.objectOf(propTypes.string).isRequired
};

export default Letter;
