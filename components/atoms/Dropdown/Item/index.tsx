import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
export const DropdownCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
export const DropdownRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
export const DropdownTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

export default DropdownItem;
