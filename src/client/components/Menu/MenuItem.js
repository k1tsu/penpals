import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledMenuItem = styled.button`
    display: flex;
    grid-column: ${props => (props.half ? '1fr' : '1 / -1')};
    height: 7.5vh;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.5em;
    border: 0;
    border-radius: inherit;
    background-color: white;
    color: black;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.hoverBackgroundColor};
    }
`;

const MenuItem = ({ children, onClick, half = false, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <StyledMenuItem onClick={handleClick} half={half} {...props}>
      { children }
    </StyledMenuItem>
  );
};

export default withTheme(MenuItem);
