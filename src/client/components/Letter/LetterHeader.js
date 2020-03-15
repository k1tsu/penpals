import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import LetterText from './LetterText';

const StyledLetterHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: transparent;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom: 1px solid #DDDDDD;
`;

const LetterHeader = ({ author }) => (
  <StyledLetterHeader>
    <LetterText author text={`From ${author}`} key={author} />
  </StyledLetterHeader>
);

LetterHeader.propTypes = {
  author: propTypes.string.isRequired
};

export default LetterHeader;
