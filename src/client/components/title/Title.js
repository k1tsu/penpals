import React from 'react';
import { string } from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledTitle = styled.h1`
    color: ${props => props.theme.primaryTextColor};
    font-size: 2.5em;

    @media (max-width: 640px) {
        font-size: 2em;
    }
`;

const Title = ({ text, children }) => (
  <StyledTitle>
    { text || children }
  </StyledTitle>
);

export default withTheme(Title);
