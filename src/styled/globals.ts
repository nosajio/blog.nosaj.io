import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: ${theme.fonts.tg.f};
    font-weight: ${theme.fonts.tg.w.regular};

  }
`;

export default GlobalStyles;