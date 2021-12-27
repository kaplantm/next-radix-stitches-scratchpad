import { styled } from "@stitches/react";
import boxShadowDefaults from "../../../../lib/constants/boxShadow";
import palette from "../../../../lib/constants/palette";

const StyledDropdownButton = styled("button", {
  all: "unset",
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: "0 10px",
  margin: ".1rem 0",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: palette.text.primary,
  backgroundColor: palette.grey[100],
  boxSizing: "border-box",
  "&:focus": { border: `1px solid ${palette.common.black}` }, // TODO: now why not?
});

// TODO: now tpes
function DropDownButton({ buttonProps, valueProps, selectedItem, ref }: any) {
  return (
    <StyledDropdownButton {...buttonProps} ref={ref}>
      <span {...valueProps}>{selectedItem ? selectedItem.rendered : "Select an option"}</span>
      <span aria-hidden="true" style={{ paddingLeft: 5 }}>
        ▼
      </span>
    </StyledDropdownButton>
  );
}

export default DropDownButton;
