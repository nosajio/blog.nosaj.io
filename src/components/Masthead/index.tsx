import * as React from 'react';
import { MastheadFrame, MastheadPattern, MastheadTitle } from './styled';

interface MastheadProps {}

const Masthead: React.FunctionComponent<MastheadProps> = props => {
  return (
    <MastheadFrame>
      <MastheadPattern />
      <MastheadTitle>
        blog.<a href="https://nosaj.io">nosaj.io</a>
      </MastheadTitle>
    </MastheadFrame>
  );
};

export default Masthead;
