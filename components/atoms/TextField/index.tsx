import { styled } from "@stitches/react";
import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield";
import { useRef } from "react";
import StyledDiv from "../StyledDiv";
import Label from "../Label";
import palette from "../../../lib/constants/palette";
import boxShadowDefaults from "../../../lib/constants/boxShadow";

const TextInput = styled("input", {
  all: "unset",
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  margin: ".1rem 0",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: palette.text.primary,
  backgroundColor: palette.grey[100],
  boxShadow: boxShadowDefaults["0_0_0_1_grey500"],
  "&:focus": { boxShadow: boxShadowDefaults["0_0_0_2_black"] },
});

type TextFieldProps = {
  label: string;
  description?: string;
  errorMessage?: string;
  value: string;
} & AriaTextFieldOptions<"input">;

function TextField(props: TextFieldProps) {
  let { label, description, errorMessage } = props;
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref);

  return (
    <StyledDiv direction="column" flex css={{ margin: "1rem" }}>
      <Label {...labelProps}>{label}</Label>
      <TextInput {...inputProps} ref={ref} />
      {!!description && (
        <StyledDiv {...descriptionProps} css={{ fontSize: 12 }}>
          {description}
        </StyledDiv>
      )}
      {!!errorMessage && (
        <StyledDiv {...errorMessageProps} css={{ color: palette.error.main, fontSize: 12 }}>
          {errorMessage}
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default TextField;
