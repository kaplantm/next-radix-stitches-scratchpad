import { HiddenSelect, useSelect } from "@react-aria/select";
import { useButton } from "@react-aria/button";
import { useSelectState } from "@react-stately/select";
import ListBox from "../Listbox";
import Popover from "../Popover";
import { useRef } from "react";
import StyledDiv from "../StyledDiv";
import Label from "../Label";
import DropDownButton from "./Button";

function DropDown(props: any) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // state.disabledKeys.add("water");
  console.log({ state });
  // Get props for child elements from useSelect
  let ref = useRef();
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref);

  return (
    <StyledDiv css={{ margin: "1rem", minWidth: "$minInputWidth" }}>
      <Label {...labelProps} css={{ display: "block" }}>
        {props.label}
      </Label>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />
      <DropDownButton buttonProps={buttonProps} valueProps={valueProps} selectedItem={state.selectedItem} ref={ref} />

      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </StyledDiv>
  );
}

export default DropDown;
