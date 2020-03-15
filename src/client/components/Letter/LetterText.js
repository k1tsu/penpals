import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledLetterText = styled.h3`
    margin: 0;
    margin-left: 5%;
    margin-right: 2.5%;
    font-family: 'Inter', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: ${props => (props.author ? '0.9em' : '0.7em')};
    white-space: ${props => (props.author ? 'nowrap' : 'normal')};
    word-wrap: break-word;
`;

// eslint-disable-next-line no-unused-vars
const LetterText = ({ author = false, body = false, text }) => (
  <StyledLetterText>
    { text }
  </StyledLetterText>
);

LetterText.propTypes = {
  author: propTypes.bool,
  body: propTypes.bool,
  text: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.object)
  ]).isRequired
};

LetterText.defaultProps = {
  author: false,
  body: false
};

export default LetterText;
