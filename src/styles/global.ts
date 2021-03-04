import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /* Use for global styles and CSS resets */
  body {
    font-family: 'Roboto', Helvetica, sans-serif;
    margin: 0;
    background-color: white;
    font-size: 1rem;
  }
  button, a, p, ul, li, textarea {
    font-family: 'Roboto', Helvetica, sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4 {
    font-family: 'Roboto Condensed', 'Roboto', Helvetica, sans-serif;
    font-weight: 700;
  }
  button, a {
    cursor: pointer;
  }
  button:focus,
  a:focus {
    outline: 2px solid rgba(0, 150, 255, 1);
  }
  
  header,
  footer,
  main {
    margin: 0 auto;
  }

  main {
    padding: 40px 0;
    min-height: 85vh;
    display: flex;
  }

  a {
    color: inherit;
  }

  code,
  pre {
    font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
  }

  pre {
    max-width: 100%;
    overflow-x: scroll;
  }
`;
