import { styled } from "@stitches/react";
import * as LabelPrimitive from "@radix-ui/react-label";
import palette from "../../../lib/constants/palette";

const Label = styled(LabelPrimitive.Root, {
  fontSize: ".8rem",
  color: palette.text.primary,
  userSelect: "none",
});

export default Label;
