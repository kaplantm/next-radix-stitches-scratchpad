import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

export default DropdownSeparator;
