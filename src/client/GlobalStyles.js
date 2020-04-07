import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }

  h1 {
    font-family: 'Alegreya';
    font-size: 2.5em;
    color: #505050;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    color: #DDDDDD;
    transition: 0.2s;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    text-align: center;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  input {
    border: none;
    width: 20vw;
    height: 5vh;
    padding: 5px;
    background-color: ${props => props.theme.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.primaryTextColor};
  }

  form > button {
    width: 20%;
    height: 5vh;
    border: none;
    border-radius: 30px;
  }
`;

export default withTheme(GlobalStyles);
