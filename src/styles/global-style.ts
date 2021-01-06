// Global Styles 작성하는 파일
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    font-family: ibm-plex-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  input, button, textarea {
    font-family: inherit;
  }

  button, input[type=button] {
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
