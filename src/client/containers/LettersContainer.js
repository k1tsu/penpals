import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addLetter } from '../redux/letters/lettersActions';
import Letter from '../components/Letter/Letter';

const Letters = styled.div`
    position: absolute;
    align-self: center;
    justify-self: center;
    text-align: left;
    white-space: nowrap;
    width: 100%;
    height: 40%;
    overflow-x: scroll;
    z-index: 10;

    :nth-child(1) {
      margin-left: 10%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

const LettersContainer = ({ letters, dispatch }) => {
  const { items } = letters;

  return (
    <Letters onClick={() => dispatch(addLetter())}>
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
    </Letters>
  );
};

LettersContainer.propTypes = {
  letters: propTypes.arrayOf(propTypes.object).isRequired,
  dispatch: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  letters: state.letters
});

export default connect(mapStateToProps)(LettersContainer);
