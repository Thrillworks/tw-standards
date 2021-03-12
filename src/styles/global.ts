import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /* Use for global styles and CSS resets */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

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
