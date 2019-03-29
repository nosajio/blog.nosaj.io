import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-family: ${theme.fonts.tg.f};
    font-weight: ${theme.fonts.tg.w.regular};

    text-rendering: geometricPrecision; 
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  a {
    color: ${theme.colors.black};
    text-decoration: underline;
  }

  a:hover {
    color: ${theme.colors.pink};
  }

  // Explicit margins on headings only
  h1, h2, h3, h4, h5 { margin: 0; }
`;

export default GlobalStyles;
