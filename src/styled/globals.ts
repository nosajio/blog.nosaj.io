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
`;

export default GlobalStyles;
