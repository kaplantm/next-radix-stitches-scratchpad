import { appStyled } from "../../../lib/styling/stitches.config";

const StyledDiv = appStyled("div", {
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
