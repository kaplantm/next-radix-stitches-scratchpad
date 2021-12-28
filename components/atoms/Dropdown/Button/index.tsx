import { forwardRef } from "react";
import { appStyled, theme } from "../../../../lib/styling/stitches.config";

const StyledDropdownButton = appStyled("button", {
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
  color: theme.colors.textPrimaryMain,
  backgroundColor: theme.colors.filledInputMain,
  boxShadow: theme.shadows[3],
  "&:focus": { boxShadow: theme.shadows[4] },
});

// TODO: now tpes

const DropDownButton = forwardRef(({ buttonProps, valueProps, selectedItem }: any, ref) => {
  return (
    <StyledDropdownButton {...buttonProps} ref={ref}>
      <span {...valueProps}>{selectedItem ? selectedItem.rendered : "Select an option"}</span>
      <span aria-hidden="true" style={{ paddingLeft: 5 }}>
        ▼
      </span>
    </StyledDropdownButton>
  );
});

DropDownButton.displayName = "DropDownButton";

export default DropDownButton;
