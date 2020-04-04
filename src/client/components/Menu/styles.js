import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em; 
  color: ${props => (props.theme.darkMode ? 'white' : 'black')};
  z-index: 50;

  & > p {
    z-index: 60;
  }

  &:hover {
    cursor: pointer;
  }
`;

StyledMenu.Item = styled.button`
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


export const HamburgerMenu = styled.div`
    position: fixed;
    display: ${props => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0; 
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 30;  

    & > button {
      color: white;
      background-color: transparent;
      height: 5vh;
    }

    & > button:hover {
      background-color: transparent;
    }
`;


export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    width: 15vw;
    height: auto;
    display: ${props => (props.visible ? 'grid' : 'none')};
    grid-template-columns: 50% 50%; 
    background-color: white;
    border-radius: 5px;
    z-index: 30;
    box-shadow: 0 5px 10px rgba(0,0,0,.05), 
                0 15px 40px rgba(0,0,0,.2);
    margin-top: 100%;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      margin: auto;
      top: -1vh;
      border-style: solid;
      border-width: 0 15px 15px 15px;
      border-color: transparent transparent #FFFFFF transparent;
      z-index: -1;
    }
`;

export default StyledMenu;
