import { styled } from "@stitches/react";

const Flex = styled("div", {
  display: "flex",
  variants: {
    variant: { full: { flex: 1, width: "100%" } },
    direction: { column: { flexDirection: "column" } },
  },
});

export default Flex;
