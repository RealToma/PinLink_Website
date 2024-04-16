import { Box } from "@mui/material";
import styled from "styled-components";
import { dataCardIntro } from "../../data/card";
import CardIntro from "../../components/card/cardIntro";

const Hero = () => {
  return (
    <StyledComponent id={"Home"}>
      <SectionTop>
        <SectionText>
          <TextHead>
            PinLink: Your Gateway to the Future of Decentralized Physical
            Infrastructure Networks (DePIN)
          </TextHead>
          <TextContent>
            PinLink is the first RWA-Tokenized DePIN platform. It allows DePIN
            asset owners to not just rent out their DePIN capacity in return for
            decentralized token payments but also tokenize the devices
            themselves as Real World Assets.
          </TextContent>
        </SectionText>
        <SectionRight>
          <SectionRing>
            <img
              src={"./assets/videos/animationRing.gif"}
              width={"100%"}
              alt="ring"
            />
          </SectionRing>
          <TextRingDetails>
            Pinlink - Fostering the maturation of Blockchain x Depin services.
          </TextRingDetails>
        </SectionRight>
      </SectionTop>
      <SectionBottom>
        {dataCardIntro.map((each, index) => {
          return <CardIntro key={index} data={each} />;
        })}
        <SectionBackPolygon>
          <SectionPolygon>
            <img
              src={"./assets/images/backgrounds/backPolygon.png"}
              width={"100%"}
              alt="polygon"
            />
          </SectionPolygon>
        </SectionBackPolygon>
      </SectionBottom>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: #000;
  flex-direction: column;
  padding: 0px 100px;
  box-sizing: border-box;
  /* margin-top: 20px; */
  margin-bottom: 400px;

  @media (max-width: 1440px) {
    padding: 0px 80px;
    margin-bottom: 300px;
    padding: 0px 50px;
  }
  @media (max-width: 1023px) {
    padding: 0px 50px;
    margin-bottom: 100px;
  }
  @media (max-width: 430px) {
    padding: 0px 20px;
    margin-bottom: 150px;
  }
`;

const SectionTop = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

const SectionBottom = styled(Box)`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;

  margin-top: 100px;
  @media (max-width: 1440px) {
    grid-column-gap: 20px;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 70px;
    grid-row-gap: 20px;
  }
`;

const SectionBackPolygon = styled(Box)`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 2000px;
  height: 700px;
  background-color: #0d0d0d;
  overflow: hidden;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);

  @media (max-width: 1440px) {
    width: 1600px;
    height: 500px;
  }
  @media (max-width: 1024px) {
    width: 1400px;
    height: 600px;
  }
`;

const SectionPolygon = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`;

const SectionText = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 150px;
  margin-right: 50px;
  @media (max-width: 1600px) {
    margin-top: 50px;
  }
  @media (max-width: 1366px) {
    margin-top: 0px;
    margin-right: 30px;
  }
  @media (max-width: 1023px) {
    margin-right: 0px;
    align-items: center;
  }
`;

const TextHead = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Garet;
  font-size: 64px;
  font-style: normal;
  font-weight: 850;
  line-height: 60px; /* 93.75% */

  @media (max-width: 1600px) {
    font-size: 50px;
  }
  @media (max-width: 1366px) {
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }
  @media (max-width: 1023px) {
    text-align: center;
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 40px; /* 93.75% */
  }
  @media (max-width: 430px) {
    font-size: 20px;
    line-height: 30px; /* 93.75% */
  }
`;

const TextContent = styled(Box)`
  color: #c6c6c6;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 184.669% */

  margin-top: 70px;

  @media (max-width: 1600px) {
    font-size: 15px;
    margin-top: 40px;
  }
  @media (max-width: 1366px) {
    margin-top: 30px;
    font-size: 13px;
  }
  @media (max-width: 1023px) {
    text-align: center;
    line-height: 30px; /* 184.669% */
  }
  @media (max-width: 768px) {
    line-height: 20px; /* 184.669% */
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    margin-top: 50px;
  }
`;

const SectionRing = styled(Box)`
  display: flex;
  width: 600px;
  aspect-ratio: 1;

  @media (max-width: 1600px) {
    width: 500px;
  }
  @media (max-width: 1366px) {
    width: 350px;
  }
  @media (max-width: 1023px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 80%;
  }
`;

const TextRingDetails = styled(Box)`
  display: flex;
  color: #fff;
  text-shadow: 2px 4px 4px rgba(46, 91, 173, 0.6);
  font-family: Garet;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 50px;
  @media (max-width: 1440px) {
    margin-top: 30px;
    font-size: 11px;
  }
  @media (max-width: 1023px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 10px;
  }
  @media (max-width: 430px) {
    font-size: 9px;
  }
`;

export default Hero;
