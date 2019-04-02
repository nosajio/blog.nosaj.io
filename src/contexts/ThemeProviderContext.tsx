import * as React from 'react';
import { Theme, ThemeModes } from '../styled/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export interface ThemeProviderProps {
  children: React.ReactElement;
  mutator: (theme: Theme, mode: ThemeModes) => Theme;
  theme: Theme;
}

type ThemeContextValue = {
  theme: Theme | {};
  mode: ThemeModes;
  setMode: (m: ThemeModes) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: {},
  mode: ThemeModes.Light,
  setMode: m => {}
});

export default class ThemeProvider extends React.Component<
  ThemeProviderProps,
  any
> {
  state = { mode: ThemeModes.Light };

  public render() {
    const { mode } = this.state;
    const { mutator, theme, children } = this.props;
    const newTheme = mutator(theme, mode);
    const value = {
      theme: newTheme,
      mode,
      setMode: (m: ThemeModes) => this.handleModeChange(m)
    };

    return (
      <ThemeContext.Provider value={value}>
        <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>
      </ThemeContext.Provider>
    );
  }

  handleModeChange(mode: ThemeModes) {
    this.setState({ mode });
  }
}
