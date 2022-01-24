import { appStyled } from "../../../lib/styling/stitches.config";

const sharedStyles = {
  margin: 0,
  padding: 0,
  listStyle: "none",
};
export const StyledUL = appStyled("ul", {
  ...sharedStyles,
});

export const StyledOL = appStyled("ol", {
  ...sharedStyles,
});

export const StyledLI = appStyled("li", {
  variants: {
    spacing: { 0: { padding: 0, margin: 0 }, 1: { padding: "$1", margin: "$1" }, 2: { padding: "$2", margin: "$2" } },
    input: {
      true: {
        backgroundColor: "$filledInputLight",
        cursor: "pointer",
        borderRadius: "$4",
        minWidth: "$minInputWidth",
        outline: "none",
        "&:hover": {
          color: "$primaryMain",
        },
      },
    },
    selected: {
      true: {},
    },
  },
  compoundVariants: [
    {
      input: true,
      selected: true,
      css: {
        backgroundColor: "$primaryLight",
        color: "$grey0",
        "&:hover": {
          color: "$grey0",
          backgroundColor: "$primaryMain",
        },
      },
    },
  ],
  defaultVariants: {
    spacing: 1,
  },
});

export default StyledUL;
