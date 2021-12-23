import React, { ChangeEvent } from "react";
import Flex from "../../atoms/Flex";
import Label from "../../atoms/Label";
import TextField from "../../atoms/TextField";

type LabelledTextFieldProps = {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputProps?: Omit<React.ComponentProps<typeof TextField>, "id" | "onChange" | "value">;
  labelProps?: React.ComponentProps<typeof Label>;
  children: React.ReactNode;
};

const LabelledTextField: React.FunctionComponent<LabelledTextFieldProps> = ({
  id,
  onChange,
  value,
  children,
  inputProps = {},
  labelProps = {},
}) => (
  <Flex direction="column">
    <Label htmlFor={id} {...labelProps} css={{ marginBottom: ".2rem" }}>
      {children}
    </Label>
    <TextField type="text" {...inputProps} id={id} onChange={onChange} value={value} />
  </Flex>
);

export default LabelledTextField;
