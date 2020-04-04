import styled from 'styled-components';

const resizeLogo = () => `
  & > img {
    display: none;
  }  
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: ${props => (props.small ? 'row' : 'column')};
    justify-content: ${props => (props.small ? 'flex-start' : 'center')};
    align-items: ${props => (props.small ? 'center' : 'flex-start')};
    width: 100%;
    height: ${props => (props.small ? '10%' : '40%')};
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

    ${props => props.small && resizeLogo()};
`; // div refers to the Dropdown component

export default StyledHeader;
