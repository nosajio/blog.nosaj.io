import * as React from 'react';
import {
  MastheadFrame,
  MastheadLightsOutIcon,
  MastheadPattern,
  MastheadTitle
} from './styled';
import { ThemeContext } from '../../contexts/ThemeProviderContext';
import { ThemeModes } from '../../styled/theme';

interface MastheadProps {}

const Masthead: React.FunctionComponent<MastheadProps> = props => {
  return (
    <ThemeContext.Consumer>
      {({ setMode, mode }) => (
        <MastheadFrame>
          <MastheadPattern />
          <MastheadTitle>
            blog.<a href="https://nosaj.io">nosaj.io</a>
          </MastheadTitle>
          <MastheadLightsOutIcon
            onClick={() =>
              setMode(
                mode === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark
              )
            }
          />
        </MastheadFrame>
      )}
    </ThemeContext.Consumer>
  );
};

export default Masthead;
