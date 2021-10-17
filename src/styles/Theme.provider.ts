import { createStitches } from '@stitches/react';

import BYT from './BYT.theme';

const { css, styled, globalCss, config, keyframes } = createStitches({
  theme: BYT,
  prefix: 'byt-',
});

export { css, styled, globalCss, config, keyframes };
