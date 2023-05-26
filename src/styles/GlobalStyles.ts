import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 300;
    font-style: normal;
    src: url('./public/fonts/NanumSquareNeo-bRg.ttf') format('truetype');
    font-display: swap;
  }

 
  body {
    font-family: 'NanumSquareNeo';
    font-weight: 300;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }
`;

export default GlobalStyles;
