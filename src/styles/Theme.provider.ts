import { createStitches, CSS } from '@stitches/react';

import BYT from './BYT.theme';

const { css, styled, globalCss, config, keyframes } = createStitches({
  theme: BYT,
  prefix: 'byt-',
  media: BYT.media,
});

export type BYTCSS = CSS;
export { css, styled, globalCss, config, keyframes };
