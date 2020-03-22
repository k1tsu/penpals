import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em; 
  color: ${props => (props.theme.isDarkMode ? 'white' : 'black')};
  z-index: 50;

  & > p {
    z-index: 60;
  }

  &:hover {
    cursor: pointer;
  }
`;

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
    background-color: ${props => (props.active ? props.theme.hoverBackgroundColor : 'white')};
    color: black;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.hoverBackgroundColor};
    }
`;

export {
  StyledMenu,
  StyledMenuItem
};
