import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { useScroll } from "../../utils/hooks.ui";

const About = () => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();
  const { visible: visibleCard2, element: cardRef2 } = useScroll();
  const { visible: visibleCard3, element: cardRef3 } = useScroll();

  return (
    <StyledComponent id={"About"}>
      <TextSubject textSubject={"About"} />
      <SectionDetails isvisible={visibleCard1 ? 1 : 0} ref={cardRef1}>
        <TextDeatils>
          PinLink lowers the barrier to entry and promotes broader participation
          in the DePIN sector through DePIN real world asset(RWA) tokenization.
          This innovative approach allows DePIN asset owners not only to rent
          out their device capacity but also to tokenize their assets as RWAs,
          enabling them to capitalize on their devices' intrinsic value and
          generate additional income streams. Our team set out to create a
          platform that would make DePIN accessible to everyone.
          <br />
          We believe that decentralized infrastructure is at the forefront of
          the next technological prowess of mankind. PinLink will democratize
          access to decentralized infrastructure and accelerate the adoption of
          DePIN technologies worldwide.
        </TextDeatils>
        <IconMachine isvisible={visibleCard2 ? 1 : 0} ref={cardRef2}>
          <img
            src={"./assets/videos/animationMachine.gif"}
            width={"100%"}
            alt="machine"
          />
        </IconMachine>
      </SectionDetails>
      <TextMoreDetails isvisible={visibleCard3 ? 1 : 0} ref={cardRef3}>
        "THE FIRST AI DRIVEN DEPIN LIQUIDITY LAYER WITH A FRACTIONALIZED COMPUTE
        POWER MARKETPLACE"
      </TextMoreDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  padding-bottom: 150px;
  box-sizing: border-box;
  padding-top: 100px;
  /* margin-top: 450px; */

  @media (max-width: 1023px) {
    padding: 50px 50px;
  }
  @media (max-width: 430px) {
    padding: 30px 20px;
  }
`;

const SectionDetails = styled(Box)`
  display: flex;
  position: relative;
  width: 60%;
  border-radius: 30px;
  border: 1px solid #77798f;
  background: #191919;
  padding: 30px;
  box-sizing: border-box;

  margin-top: 100px;

  cursor: pointer;
  transition: ${(p: any) => (p.isvisible ? "0.5s" : "1s")};
  &:hover {
    box-shadow: 0px 0px 15px 5px #999;
  }
  bottom: ${(p: any) => (p.isvisible ? "0px" : "-200px")};
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  /* transition: 700ms; */

  @media (max-width: 1600px) {
    padding: 25px;
  }
  @media (max-width: 1440px) {
    padding: 20px;
    width: 55%;
    margin-top: 70px;
  }
  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 50px;
    border-radius: 12px;
  }
`;

const TextDeatils = styled(Box)`
  color: #c6c6c6;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 30px; /* 150% */
  }
  @media (max-width: 1023px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 30px; /* 150% */
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px; /* 150% */
  }
`;

const IconMachine = styled(Box)`
  display: flex;
  position: absolute;
  width: 240px;
  aspect-ratio: 1;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  transition: 0.5s;
  top: 50px;
  right: ${(p: any) => (p.isvisible ? "-300px" : "-400px")};

  @media (max-width: 1600px) {
    width: 200px;
    right: ${(p: any) => (p.isvisible ? "-200px" : "-300px")};
  }
  @media (max-width: 1440px) {
    width: 150px;
  }
  @media (max-width: 1023px) {
    width: 120px;
    top: -70px;
    right: ${(p: any) => (p.isvisible ? "-50px" : "-150px")};
  }
  @media (max-width: 768px) {
    width: 100px;
    top: -50px;
    right: ${(p: any) => (p.isvisible ? "-30px" : "-150px")};
  }
`;

const TextMoreDetails = styled(Box)`
  display: flex;
  width: 60%;
  text-align: center;
  color: #c1ff72;
  font-family: Garet;
  font-size: 30px;
  font-style: normal;
  font-weight: 850;
  line-height: 60px; /* 177.778% */
  margin-top: 60px;
  transition: 1.5s;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1440px) {
    width: 55%;
    font-size: 25px;
    line-height: 50px; /* 177.778% */
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 40px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;
  }
`;

export default About;
