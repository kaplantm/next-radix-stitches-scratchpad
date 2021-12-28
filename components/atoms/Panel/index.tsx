import boxShadowDefaults from "../../../lib/constants/boxShadow";
import { appStyled } from "../../../lib/styling/stitches.config";
import StyledDiv from "../StyledDiv";

const Panel = appStyled(StyledDiv, {
  boxShadow: "$2",
  padding: "2rem",
  margin: "2rem 0",
  borderRadius: 8,
  backgroundColor: "hsla(255, 100%, 100%, .1)",
});

export default Panel;
