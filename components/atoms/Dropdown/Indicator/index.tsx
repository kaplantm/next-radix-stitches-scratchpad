import { styled } from "@stitches/react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export default DropdownItemIndicator;
