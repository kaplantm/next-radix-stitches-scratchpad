import palette from "./palette";

console.log({ palette });
const defaultBoxShadowColor = "red";

// const defaultBoxShadowColor = adjustColor(palette.grey200, { a: 0.3 });

const boxShadowDefaults = {
  A: `${defaultBoxShadowColor} 0px 2px 1px -1px,
      ${defaultBoxShadowColor} 0px 1px 1px 0px, 
      ${defaultBoxShadowColor} 0px 1px 3px 0px`,
  B: `${defaultBoxShadowColor} 0px 3px 3px -2px,
      ${defaultBoxShadowColor} 0px 3px 4px 0px, 
      ${defaultBoxShadowColor} 0px 1px 8px 0px`,
};

export default boxShadowDefaults;
