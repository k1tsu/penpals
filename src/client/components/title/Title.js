import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledTitle = styled.h1`
    font-size: 2.5em;

    @media (max-width: 640px) {
        font-size: 2em;
    }
`;

const Title = ({ text }) => (
  <StyledTitle>
    { text }
  </StyledTitle>
);

Title.propTypes = { text: string.isRequired };

export default Title;
