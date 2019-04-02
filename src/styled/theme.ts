import colors from './colors';
import fonts from './fonts';
import mediaQueryGenerator, { defineMediaQueries } from './mediaqueries';

// Used for extractring keys from theme objects and passing down to styled
// components
type GenericThemeProps<V> = { [K in keyof V]: V[K] };

// Modularscale fn shape
type msFn = (s: number) => number;

// generateModularScale takes a rule object and memoizes the scale for
// totalSteps
const generateModularScale = (exp: number, totalSteps: number = 20): msFn => {
  const steps: number[] = [];
  for (let i = 0 - totalSteps / 2; i < totalSteps / 2; i++) {
    steps.push(Math.round(Math.pow(exp, i) * 10000) / 10000);
  }
  return (s = 1) => steps[s + totalSteps / 2];
};

// Rules for mediaqueries before the styled helpers are generated and added to
// the theme
const mqRules = defineMediaQueries([
  {
    name: 'l',
    min: 1440
  },
  {
    name: 'm',
    min: 770
  }
]);
const mq = mediaQueryGenerator(mqRules);

// Theme shape. Passed to all child components
export type Theme = {
  mode: ThemeModes;
  colors: GenericThemeProps<typeof colors>;
  fonts: GenericThemeProps<typeof fonts>;
  ms: msFn;
  msrem: (s: number) => string; // Same as ms but returns the value with "rem" appended
  mq: typeof mq;
};

// Generate the modular scale
const msfn = generateModularScale(1.5, 40);

// Change the theme based on the mode (used for "night mode")
export enum ThemeModes {
  Light,
  Dark
}

// Finally, compose and export the theme
const theme: Theme = {
  mode: ThemeModes.Light,
  colors,
  fonts,
  mq,
  ms: s => msfn(s),
  msrem: s => `${msfn(s)}rem`
};
export default theme;

// themeMutator is a state machine that spits out different theme objects
// depending on the passed mode.
export const themeMutator = (theme: Theme, mode: ThemeModes): Theme => {
  switch (mode) {
    // For Dark mode, simply invert most of the colors. This seems wrong, but
    // actually makes sense because it affirms the default colors while writing
    // componenets, and leaves worrying about colors to the themeMutator.
    case ThemeModes.Dark:
      const newColors = {
        ...theme.colors,
        black: 'white',
        greyLight: '#484157',
        white: theme.colors.black
      };
      return { ...theme, mode, colors: newColors };

    // Light mode is the default
    case ThemeModes.Light:
      return theme;
    default:
      return theme;
  }
};
