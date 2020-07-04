import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #1c1c1c;
  }

  h1 {
    font-family: 'Norwester', sans-serif;
      font-size: 30px;
      color: #fff;
  }

  h2 {
    font-family: 'Monserrat Classic', sans-serif;
      font-size: 18px;
      color: #fff;
  }

  .notfound {
    text-align: center;
  }
`;
