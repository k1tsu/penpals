import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledMenuItem = styled.button`
    display: flex;
    width: 100%;
    height: 5vh;
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

const MenuItem = ({ children, onClick, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <StyledMenuItem onClick={handleClick} {...props}>
      { children }
    </StyledMenuItem>
  );
};

export default withTheme(MenuItem);
