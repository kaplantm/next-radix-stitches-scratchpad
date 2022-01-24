import { theme, appGlobalCss } from "./stitches.config";

const globalStyles = appGlobalCss({
  "html,body": { fontSize: theme.fontSizes.baseSize, fontFamily: "sans-serif" },
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
});

export default globalStyles;
