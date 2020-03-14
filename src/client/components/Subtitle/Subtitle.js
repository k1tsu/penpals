import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledSubtitle = styled.h2`
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1em;

    @media (max-width: 640px) {
        font-size: 0.8em;
    }
`;

const Subtitle = ({ text }) => <StyledSubtitle children={text} />;

Subtitle.propTypes = { text: string.isRequired };

export default Subtitle;
