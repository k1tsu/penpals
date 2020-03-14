import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import LetterText from './LetterText';

const StyledLetterBody = styled.div`
    position: relative;
    padding-top: 2.5%;
    width: 100%;
    height: 80%; 
    overflow-y: hidden;

    &::after {
      content: '';
      width:inherit;
      height:100%;    
      position:absolute;
      left:0;
      top:0;
      background:linear-gradient(transparent 150px, white);
    }
`;

const LetterBody = ({ text }) => (
  <StyledLetterBody>
    <LetterText body text={text} key={text} />
  </StyledLetterBody>
);

LetterBody.propTypes = {
  text: propTypes.arrayOf(propTypes.object).isRequired
};

export default LetterBody;
