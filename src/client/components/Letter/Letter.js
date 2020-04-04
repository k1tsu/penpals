import React from 'react';
import StyledLetter from './styles';

const { Header, Text, Body } = StyledLetter;

const InitialLetter = ({ onClick }) => (
  <StyledLetter first onClick={onClick}>
    <Body center>
      <h2>🖋️</h2>
      <Text>Send a new letter</Text>
    </Body>
  </StyledLetter>
)

const Letter = ({ last, letter, initial, onClick }) => { 
  // eslint-disable-next-line react/jsx-one-expression-per-line
  const multilinedText = letter.text.split('\\n').map(item => (<>{item}<br /></>));
  const { author } = letter;

  if (initial) {
    return <InitialLetter onClick={onClick} />
  };

  return (
    <StyledLetter last={last} onClick={onClick}>
      <Header>
        <Text>
          From { author.display_name }
        </Text>
      </Header>
      <Body text={multilinedText}>
        <Text body>
          { multilinedText }
        </Text>
      </Body>
    </StyledLetter>
  );
};

Letter.defaultProps = {
  letter: {
    text: ''
  }
}

export default Letter;
