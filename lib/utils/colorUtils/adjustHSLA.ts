const hslaParsingRegex =
  /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;

const constructHSLAString = ({ h, s, l, a }: { h: number; s: number; l: number; a: number }) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

/**
 * @param hslaColor
 * @param adjustments
 * @param useDelta if true, hsla adjustment values modify, rather than replace, existing values
 * @returns {String} Modified HSLA color
 */
export const adjustColor = (
  hslaColor: string,
  adjustments: { h?: number; s?: number; l?: number; a?: number },
  useDelta?: boolean
) => {
  const match = (hslaColor || "").match(hslaParsingRegex);

  if (match?.length !== 5) {
    throw new Error(`Invalid HSLA color, cannot adjust: ${hslaColor}`);
  }

  const [_fullMatch, h, s, l, a] = match;

  const newValues = {
    h: adjustments.h === undefined ? h : (adjustments.h || 0) + (useDelta ? parseInt(h) : 0),
    s: adjustments.s === undefined ? s : (adjustments.s || 0) + (useDelta ? parseInt(s) : 0),
    l: adjustments.l === undefined ? l : (adjustments.l || 0) + (useDelta ? parseInt(l) : 0),
    a: adjustments.a === undefined ? a : (adjustments.a || 0) + (useDelta ? parseInt(a) : 0),
  };
  console.log(
    `Invalid HSLA color, adjustments out of bounds: ${hslaColor}. Adjustments: ${JSON.stringify({
      adjustments,
      useDelta,
      h,
      s,
      l,
      a,
      resultA: (adjustments.a || 0) + (useDelta ? parseInt(a) : 0),
      intA: parseInt(a),
    })} Adjusted Values: ${JSON.stringify(newValues)}`
  );
  if (
    newValues.h < 0 ||
    newValues.h > 360 ||
    newValues.s < 0 ||
    newValues.s > 100 ||
    newValues.l < 0 ||
    newValues.l > 100 ||
    newValues.a < 0 ||
    newValues.a > 1
  ) {
    throw new Error(
      `Invalid HSLA color, adjustments out of bounds: ${hslaColor}. Adjustments: ${JSON.stringify({
        adjustments,
        useDelta,
      })} Adjusted Values: ${JSON.stringify(newValues)}`
    );
  } else {
    return constructHSLAString(newValues);
  }
};
