import { styled } from "@stitches/react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { grayA } from "@radix-ui/colors";

const Label = styled(LabelPrimitive.Root, {
  fontSize: ".8rem",
  color: grayA.grayA11,
  userSelect: "none",
});

export default Label;
