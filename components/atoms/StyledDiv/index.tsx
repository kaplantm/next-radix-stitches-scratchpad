import { styled } from "@stitches/react";

const StyledDiv = styled("div", {
  variants: {
    flex: {
      true: {
        display: "flex",
      },
    },
    variant: { full: { flex: 1, width: "100%" } },
    direction: { column: { flexDirection: "column" } },
  },
});

export default StyledDiv;
