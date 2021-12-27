import { useListBox, useOption } from "@react-aria/listbox";
import { useRef } from "react";

// TODO: now props, update stlye
function ListBox(props: any) {
  let ref = useRef();
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        overflow: "auto",
        width: 200,
      }}
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

// TODO: now props
function Option({ item, state }: any) {
  let ref = useRef();
  let { optionProps, isSelected, isFocused, isDisabled } = useOption({ key: item.key }, state, ref);

  let backgroundColor;
  let color = "black";

  if (isSelected) {
    backgroundColor = "blueviolet";
    color = "white";
  } else if (isFocused) {
    backgroundColor = "gray";
  } else if (isDisabled) {
    backgroundColor = "transparent";
    color = "gray";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {item.rendered}
    </li>
  );
}

export default ListBox;
