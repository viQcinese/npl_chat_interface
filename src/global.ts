import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none
  }

  body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #000;
  }

  * {
    color: #333;
  }
`;
