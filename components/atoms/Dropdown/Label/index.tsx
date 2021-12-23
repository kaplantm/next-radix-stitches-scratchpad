import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

export default DropdownLabel;
