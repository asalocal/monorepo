import { createStitches, CSS } from "@stitches/react";
import AAL from "./themes/AAL.theme";
import DarkTheme from "./themes/Dark.theme";

const { css, styled, globalCss, config, getCssText, keyframes, createTheme } =
  createStitches({
    theme: AAL,
    prefix: "AAL-",
    media: AAL.media,
  });

export const darkTheme = createTheme(DarkTheme);

export type BYTCSS = CSS;

export {
  css,
  styled,
  globalCss,
  config,
  keyframes,
  getCssText,
  AAL,
  DarkTheme,
};
