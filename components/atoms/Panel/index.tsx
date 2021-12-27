import { styled } from "@stitches/react";
import boxShadowDefaults from "../../../lib/constants/boxShadow";
import StyledDiv from "../StyledDiv";

const Panel = styled(StyledDiv, {
  boxShadow: boxShadowDefaults.B,
  padding: "2rem",
  margin: "2rem 0",
  borderRadius: 8,
  backgroundColor: "hsla(255, 100%, 100%, .1)",
});

export default Panel;
