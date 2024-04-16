import { Box } from "@mui/material";
import styled from "styled-components";
import { useScroll } from "../../utils/hooks.ui";

const TextSubject = ({ textSubject }: any) => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();

  return (
    <StyledComponent ref={cardRef1} isvisible={visibleCard1 ? 1 : 0}>
      {textSubject}
      <BorderImageLeft isvisible={visibleCard1 ? 1 : 0}>
        <img
          src={"./assets/images/icons/borderText01.svg"}
          width={"100%"}
          alt="left"
        />
      </BorderImageLeft>
      <BorderImageRight isvisible={visibleCard1 ? 1 : 0}>
        <img
          src={"./assets/images/icons/borderText02.svg"}
          width={"100%"}
          alt="left"
        />
      </BorderImageRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  /* width: 100%; */
  position: relative;
  color: #fff;
  font-family: "Tachyon";
  /* font-family: Inter; */
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  z-index: 3;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  transition: 1s;

  @media (max-width: 1440px) {
    font-size: 50px;
  }
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const BorderImageLeft = styled(Box)`
  display: flex;
  position: absolute;
  width: 450px;
  right: ${(p: any) => (p.isvisible ? "80%" : "150%")};
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  bottom: 50%;
  transition: 1500ms;

  @media (max-width: 1440px) {
    width: 400px;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
    bottom: 60%;
  }
  @media (max-width: 500px) {
    width: 130px;
    bottom: 65%;
  }
`;

const BorderImageRight = styled(Box)`
  display: flex;
  position: absolute;
  width: 450px;
  left: ${(p: any) => (p.isvisible ? "80%" : "150%")};
  top: 50%;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  transition: 1500ms;

  @media (max-width: 1440px) {
    width: 400px;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
    top: 60%;
  }
  @media (max-width: 500px) {
    width: 130px;
    top: 65%;
  }
`;

export default TextSubject;
