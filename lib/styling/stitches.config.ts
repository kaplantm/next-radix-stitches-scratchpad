import { createStitches, css } from "@stitches/react";
import palette from "../constants/palette";
import { getContextColorSet, remSizing } from "./utils";

// defining colors outside the theme for improve IDE autofil experience - not getting autocomplete on stitches tokens within this file
const colors = {
  // All colors
  palette,
  // Contextual colors
  contextual: {
    ...getContextColorSet("background", palette.grey0, palette.grey0, palette.blue700),
    ...getContextColorSet("primary", palette.blue300, palette.blue500, palette.blue800),
    ...getContextColorSet("secondary", palette.purple300, palette.purple500, palette.purple800),
    ...getContextColorSet("error", palette.red300, palette.red500, palette.red800),
    ...getContextColorSet("success", palette.green300, palette.green500, palette.green800),
    ...getContextColorSet("info", palette.blue200, palette.blue500, palette.blue800),
    ...getContextColorSet("textPrimary", palette.grey500, palette.grey1000, palette.grey1000),
    ...getContextColorSet("textSecondary", palette.blue200, palette.blue500, palette.blue800),
    ...getContextColorSet("boxShadow", palette.grey200, palette.grey500, palette.grey800),
    ...getContextColorSet("filledInput", palette.grey0, palette.grey50, palette.grey400),
    ...getContextColorSet("filledInputOutline", palette.grey100, palette.grey300, palette.grey500),
  },
};

export const {
  styled: appStyled,
  css: appCss,
  theme,
  getCssText,
  globalCss: appGlobalCss,
} = createStitches({
  theme: {
    radii: {
      4: "4px",
    },
    sizes: {
      minInputWidth: "10rem",
      minInputHeight: "2rem",
      minButtonWidth: "10rem",
      minButtonHeight: "2rem",
      ...remSizing,
    },
    colors: { ...colors.palette, ...colors.contextual },
    space: remSizing,
    fontSizes: { ...remSizing, baseSize: "16px" },
    shadows: {
      1: `${colors.contextual.boxShadowMain} 0px 2px 1px -1px,
          ${colors.contextual.boxShadowMain} 0px 1px 1px 0px, 
          ${colors.contextual.boxShadowMain} 0px 1px 3px 0px`,
      2: `${colors.contextual.boxShadowLight} 0px 3px 3px -2px,
          ${colors.contextual.boxShadowLight} 0px 3px 4px 0px, 
          ${colors.contextual.boxShadowLight} 0px 1px 8px 0px`,
      3: `${colors.contextual.filledInputOutlineLight} 0px 2px 1px -1px,
          ${colors.contextual.filledInputOutlineLight} 0px 1px 1px 0px, 
          ${colors.contextual.filledInputOutlineLight} 0px 1px 3px 0px`,
      4: `${colors.contextual.filledInputOutlineMain} 0px 2px 1px -1px,
          ${colors.contextual.filledInputOutlineMain} 0px 1px 1px 0px, 
          ${colors.contextual.filledInputOutlineMain} 0px 1px 3px 0px`,
    },
  },
});
