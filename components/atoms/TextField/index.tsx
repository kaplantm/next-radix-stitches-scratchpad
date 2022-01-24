import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield";
import { useRef } from "react";
import StyledDiv from "../StyledDiv";
import Label from "../Label";
import { appStyled, theme } from "../../../lib/styling/stitches.config";

const TextInput = appStyled("input", {
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
  color: theme.colors.textPrimaryMain,
  backgroundColor: theme.colors.filledInputMain,
  boxShadow: theme.shadows[3],
  "&:focus": { boxShadow: theme.shadows[4] },
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
        <StyledDiv {...errorMessageProps} css={{ color: theme.colors.errorMain, fontSize: 12 }}>
          {errorMessage}
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default TextField;
