import styled from 'styled-components';

const StyledMenuWrapper = styled.div`
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

export default StyledMenuWrapper;