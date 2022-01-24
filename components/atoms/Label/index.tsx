import * as LabelPrimitive from "@radix-ui/react-label";
import { appStyled, theme } from "../../../lib/styling/stitches.config";

const Label = appStyled(LabelPrimitive.Root, {
  fontSize: ".8rem",
  color: theme.colors.textPrimaryLight,
  userSelect: "none",
  padding: ".25rem",
});

export default Label;
