import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: violet.violet11,
  },
});

export default RadioGroupIndicator;
