import { adjustColor } from "../utils/colorUtils/adjustHSLA";
import { black, blues, drabBlues, greens, greys, purples, reds, white, yellows } from "./colors";

// inspired by: https://mui.com/customization/palette/#default-values

// TODO: scrap this is leverage stitches theming
const palette = {
  mode: "light",
  primary: {
    ...blues,
    main: blues[500],
    light: blues[300],
    dark: blues[700],
    contrastText: white,
  },
  divider: greys[100],
  primaryDark: {
    ...drabBlues,
    main: drabBlues[500],
    light: drabBlues[300],
    dark: drabBlues[700],
    contrastText: white,
  },
  common: { black: black, white: white },
  text: { primary: black, secondary: greys[500], disabled: adjustColor(black, { a: 0.4 }) },
  grey: {
    ...greys,
    main: greys[500],
    light: greys[300],
    dark: greys[700],
    contrastText: white,
  },
  error: {
    ...reds,
    "50": "#FFF0F1",
    "100": "#FFDBDE",
    "200": "#FFBDC2",
    "300": "#FF99A2",
    "400": "#FF7A86",
    "500": "#FF505F",
    "600": "#EB0014",
    "700": "#C70011",
    "800": "#94000D",
    "900": "#570007",
    main: reds[500],
    light: reds[300],
    dark: reds[700],
    contrastText: white,
  },
  success: {
    ...greens,
    main: greens[500],
    light: greens[300],
    dark: greens[700],
    contrastText: white,
  },
  warning: {
    ...yellows,
    main: yellows[500],
    light: yellows[300],
    dark: yellows[700],
    contrastText: white,
  },
  secondary: {
    ...purples,
    main: yellows[500],
    light: yellows[300],
    dark: yellows[700],
    contrastText: white,
  },
  info: {
    ...blues,
    main: blues[600],
    light: blues[500],
    dark: blues[900],
    contrastText: white,
  },
  background: { light: white, dark: drabBlues[800] },
  action: {
    active: adjustColor(black, { a: 0.54 }),
    hover: adjustColor(black, { a: 0.04 }),
    selected: adjustColor(black, { a: 0.08 }),
    disabled: adjustColor(black, { a: 0.26 }),
    disabledBackground: adjustColor(black, { a: 0.12 }),
    focus: adjustColor(black, { a: 0.12 }),
  },
};

export default palette;
