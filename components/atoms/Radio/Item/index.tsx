import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const RadioGroupItem = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 25,
  height: 25,
  borderRadius: "100%",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export default RadioGroupItem;
