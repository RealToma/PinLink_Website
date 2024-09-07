import { Box } from "@mui/material";
import styled from "styled-components";
import { SectionEach } from "../../../components/layout/section";
import SectionChart from "./01chart";
import SectionStats from "./02stats";
import SectionStake from "./03stake";

const StakeNow = () => {
  return (
    <StyledComponent>
      <SectionEach>
        {/* <BackLeftBlue03>
          <img
            src={"./assets/images/backgrounds/backGradient02.png"}
            width={"100%"}
            alt=""
          />
        </BackLeftBlue03> */}
        <SectionChart />
        <SectionStats />
        <SectionStake />
      </SectionEach>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

// const BackLeftBlue03 = styled(Box)`
//   display: flex;
//   position: absolute;
//   width: 2000px;
//   aspect-ratio: 1;
//   right: -30%;
//   bottom: -40%;
//   z-index: -1;
// `;

export default StakeNow;
