import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { dataUseCases } from "../../data/text";
import { useScroll } from "../../utils/hooks.ui";

const UseCases = () => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();
  const { visible: visibleCard2, element: cardRef2 } = useScroll();
  const { visible: visibleCard3, element: cardRef3 } = useScroll();

  return (
    <StyledComponent id={"UseCases"}>
      <TextSubject textSubject={"Use Cases"} />
      <TextHead ref={cardRef1} isvisible={visibleCard1 ? 1 : 0}>
        By bringing RWA-tokenization dynamics to the DePIN sector, PinLink
        achieves several key benefits:
      </TextHead>
      <SectionEarth ref={cardRef2} isvisible={visibleCard2 ? 1 : 0}>
        <img
          src="./assets/videos/animationEarth01.gif"
          width={"100%"}
          alt="earth"
        />
      </SectionEarth>
      <SectionText ref={cardRef3}>
        {dataUseCases.map((each, index) => {
          return (
            <SectionEachText key={index} isvisible={visibleCard3 ? 1 : 0}>
              <TextContent01>{each.textHead}</TextContent01>
              <TextContent02>{each.textContent}</TextContent02>
            </SectionEachText>
          );
        })}
      </SectionText>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
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

const TextHead = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px; /* 107.813% */
  margin-top: 100px;

  transition: 1.5s;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};

  @media (max-width: 1440px) {
    font-size: 40px;
    line-height: 50px; /* 107.813% */
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 30px;
    line-height: 40px; /* 107.813% */
  }
  @media (max-width: 430px) {
    margin-top: 50px;
    font-size: 25px;
    line-height: 30px; /* 107.813% */
  }
`;

const SectionEarth = styled(Box)`
  display: flex;
  width: 600px;
  margin-top: 60px;
  aspect-ratio: 1;

  transition: 3s;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};

  @media (max-width: 1440px) {
    width: 550px;
  }
  @media (max-width: 1023px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 400px;
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const SectionText = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const SectionEachText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  transition: 1s;
  transform: ${(p: any) => `translateY(${p.isvisible ? "0px" : "300px"})`};
`;

const TextContent01 = styled(Box)`
  color: #c1ff72;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 115.418% */

  @media (max-width: 1440px) {
    font-size: 23px;
  }
  @media (max-width: 1023px) {
    font-size: 21px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: 430px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const TextContent02 = styled(Box)`
  color: #d9d9d9;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media (max-width: 1440px) {
    font-size: 23px;
  }
  @media (max-width: 1023px) {
    font-size: 21px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: 430px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export default UseCases;
