import { adjustColor } from "../utils/colorUtils/adjustHSLA";
import palette from "./palette";

const defaultBoxShadowColor = adjustColor(palette.common.black, { a: 0.3 });

const boxShadowDefaults = {
  A: `${defaultBoxShadowColor} 0px 2px 1px -1px,
      ${defaultBoxShadowColor} 0px 1px 1px 0px, 
      ${defaultBoxShadowColor} 0px 1px 3px 0px`,
  B: `${defaultBoxShadowColor} 0px 3px 3px -2px,
      ${defaultBoxShadowColor} 0px 3px 4px 0px, 
      ${defaultBoxShadowColor} 0px 1px 8px 0px`,
};

export default boxShadowDefaults;
