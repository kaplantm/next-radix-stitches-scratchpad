export const remSizing = {
  1: ".25rem",
  2: ".5rem",
  3: ".75rem",
  4: "1rem", // defined by theme.fontSizes.baseSize
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  13: "3.25rem",
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
  17: "4.25rem",
  18: "4.5rem",
  19: "4.75rem",
  20: "5rem",
};

export const getContextColorSet = <T extends string>(prefix: T, light: string, main: string, dark: string) => {
  const getKey = (suffix: string) => `${prefix}${suffix}`;
  return {
    [getKey("Light")]: light,
    [getKey("Main")]: main,
    [getKey("Dark")]: dark,
  } as {
    [key in `${T}${"Light" | "Main" | "Dark"}`]: string;
  };
};
