import { blackA } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import Flex from "../Flex";

const Panel = styled(Flex, {
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  padding: "2rem",
  borderRadius: 8,
  backgroundColor: "hsla(255, 100%, 100%, .1)",
});

export default Panel;
