import { addKeyPrefix } from "../utils/objectUtils";
import * as colors from "./colors";

type paletteType = { [key in `${keyof typeof colors}${keyof typeof colors[keyof typeof colors]}`]: string };
const palette: paletteType = Object.keys(colors).reduce((acc: any, colorGroupKey) => {
  const colorGroup = colors[colorGroupKey as keyof typeof colors];
  const colorGroupWithPrefix = addKeyPrefix(colorGroupKey, colorGroup);
  return { ...acc, ...colorGroupWithPrefix };
}, {} as paletteType);

export default palette;
