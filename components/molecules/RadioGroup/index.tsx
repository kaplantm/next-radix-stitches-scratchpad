import React, { useState } from "react";
import { styled } from "@stitches/react";
import Label from "../../atoms/Label";
import RadioGroupRoot from "../../atoms/Radio/Root";
import RadioGroupItem from "../../atoms/Radio/Item";
import RadioGroupIndicator from "../../atoms/Radio/Indicator";
import Flex from "../../atoms/Flex";

const RadioLabel = styled(Label, {
  marginLeft: 15,
  fontSize: 15,
});

type RadioGroupProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
};

export const RadioGroup: React.FunctionComponent<RadioGroupProps> = ({ value, setValue, options }) => {
  return (
    <>
      <Label htmlFor="spacing" css={{ lineHeight: "35px", marginRight: 15 }}>
        Spacing
      </Label>
      <RadioGroupRoot onValueChange={setValue} value={value} aria-label="View density" id="spacing">
        {options.map((option) => (
          <Flex css={{ alignItems: "center" }} key={option}>
            <RadioGroupItem value={option} id={`option-${option}`}>
              <RadioGroupIndicator />
            </RadioGroupItem>
            <RadioLabel htmlFor={`option-${option}`}>{option}</RadioLabel>
          </Flex>
        ))}
      </RadioGroupRoot>
    </>
  );
};

export default RadioGroup;
