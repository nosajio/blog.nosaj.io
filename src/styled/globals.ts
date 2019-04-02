import { createGlobalStyle } from 'styled-components';
import { Theme, ThemeModes } from './theme';
import {
  colorTransitionWithDelay,
  oneWayDelayColorTransition
} from './transitions';

const GlobalStyles = createGlobalStyle`
  // Initialise webfonts
  ${({ theme }: { theme: Theme }) => theme.fonts.init()}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.tg.f};
    font-weight: ${({ theme }: { theme: Theme }) => theme.fonts.tg.w.regular};

    text-rendering: geometricPrecision; 
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    margin: 0;
    background: ${({ theme }: { theme: Theme }) => theme.colors.white};
    color: ${({ theme }: { theme: Theme }) => theme.colors.black};
    transition: background-color 300ms ease;
    ${({ theme }: { theme: Theme }) =>
      oneWayDelayColorTransition(theme.mode === ThemeModes.Dark)};
  }

  a {
    ${({ theme }: { theme: Theme }) =>
      oneWayDelayColorTransition(theme.mode === ThemeModes.Dark)};
    color: ${({ theme }: { theme: Theme }) => theme.colors.black};
    text-decoration: underline;
  }

  a:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.pink};
  }

  h1, h2, h3, h4, h5 { margin: 0; }
`;

export default GlobalStyles;
