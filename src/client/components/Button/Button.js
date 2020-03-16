/* eslint-disable react/prop-types */
import React from 'react';
import styled, { withTheme } from 'styled-components';

const widths = {
  desktop: {
    b: '10vw',
    m: '7.5vw',
    s: '5vw',
  },
  mobile: {
    b: '40vw',
    m: '20vw',
    s: '10vw',
  }
};

const StyledButton = styled.button`
    width: ${props => widths.desktop[props.size]};
    justify-self: ${props => props.justifySelf};
    height: 7vh;
    margin-left: 1%;
    margin-right: 1%;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    color: ${props => props.theme.secondaryTextColor};
    font-size: 1em;
    outline: none;
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.hoverBackgroundColor};
    }

    @media (max-width: 900px) {
        width: ${props => widths.mobile[props.size]};
        margin-left: 2%;
    }
`;

const Button = ({ size = 'b', justifySelf = 'flex-start', children, ...props }) => (
  <StyledButton size={size} justifySelf={justifySelf} {...props}>
    { children }
  </StyledButton>
);

export default withTheme(Button);
