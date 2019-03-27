import colors from './colors';
import fonts from './fonts';

type GenericThemeProps<V> = { [K in keyof V]: V[K] };

type msFn = (s: number) => number;

const generateModularScale = (exp: number, totalSteps: number = 20): msFn => {
  const steps: number[] = [];
  for (let i = 0 - totalSteps / 2; i < totalSteps / 2; i++) {
    steps.push(Math.round(Math.pow(exp, i) * 10000) / 10000);
  }
  return <msFn>(s = 1) => steps[s + totalSteps / 2];
};

export type Theme = {
  colors: GenericThemeProps<typeof colors>;
  fonts: GenericThemeProps<typeof fonts>;
  ms: msFn;
  msrem: (s: number) => string; // Same as ms but returns the value with "rem" appended
};

const msfn = generateModularScale(1.5, 40);

const theme: Theme = {
  colors,
  fonts,
  ms: s => msfn(s),
  msrem: s => `${msfn(s)}rem`
};

export default theme;
