import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 40%;
    background-color: ${props => props.theme.primaryColor};

    & > * {
      margin: 0;
      margin-left: 10%;
      margin-right: 10%;
    }

    & > div { 
      position: absolute;
      right: 0;
      width: auto;
      height: auto;
    }
`; // div refers to the Dropdown component

export default StyledHeader;
