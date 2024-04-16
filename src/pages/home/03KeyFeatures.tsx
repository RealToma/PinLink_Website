import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { dataKeyFeatures } from "../../data/card";
import CardFeature from "../../components/card/cardFeature";

const KeyFeatures = () => {
  return (
    <StyledComponent id={"KeyFeatures"}>
      <TextSubject textSubject={"Key Features"} />
      <SectionCardFeature>
        {dataKeyFeatures.map((each, index) => {
          return <CardFeature key={index} data={each} />;
        })}
        <SectionBackPolygon>
          {/* <SectionPolygon> */}
          <img
            src={"./assets/images/backgrounds/backPolygon.png"}
            width={"100%"}
            alt="polygon"
          />
          {/* </SectionPolygon> */}
        </SectionBackPolygon>
      </SectionCardFeature>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  padding: 100px 300px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 70px 200px;
  }
  @media (max-width: 1023px) {
    padding: 50px 50px;
  }
  @media (max-width: 430px) {
    padding: 30px 20px;
  }
`;

const SectionCardFeature = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
`;

const SectionBackPolygon = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 110%;
  height: 700px;
  left: 50%;
  bottom: -300px;
  transform: translateX(-50%);
  margin-bottom: 150px;
`;

// const SectionPolygon = styled(Box)`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   bottom: 0px;
//   left: 50%;
//   transform: translateX(-50%);
// `;

export default KeyFeatures;
