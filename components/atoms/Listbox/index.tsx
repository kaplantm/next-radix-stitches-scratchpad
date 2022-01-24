import { useListBox, useOption } from "@react-aria/listbox";
import { useRef } from "react";
import StyledUL, { StyledLI } from "../StyledListElements";

// TODO: now props, update stlye
function ListBox(props: any) {
  let ref = useRef<any>();
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <StyledUL {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </StyledUL>
  );
}

// TODO: now props types
function Option({ item, state }: any) {
  let ref = useRef<any>();
  let { optionProps, isSelected } = useOption({ key: item.key }, state, ref);

  return (
    <StyledLI {...optionProps} input selected={isSelected} ref={ref}>
      {item.rendered}
    </StyledLI>
  );
}

export default ListBox;
