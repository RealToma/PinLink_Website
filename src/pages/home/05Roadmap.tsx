import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { useScroll } from "../../utils/hooks.ui";

const Roadmap = () => {
  const { visible: visibleCard2, element: cardRef2 } = useScroll();
  return (
    <StyledComponent id={"Roadmap"}>
      <TextSubject textSubject={"Roadmap"} />
      <SectionRoadmap ref={cardRef2} isvisible={visibleCard2 ? 1 : 0}>
        <img
          src={"./assets/images/backgrounds/roadmap.png"}
          width={"100%"}
          alt="roadmap"
        />
      </SectionRoadmap>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
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

const SectionRoadmap = styled(Box)`
  display: flex;
  width: 700px;
  margin-top: 100px;
  transition: 2s;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  transform: ${(p: any) => (p.isvisible ? "scale(1)" : "scale(0)")};
  @media (max-width: 1440px) {
    width: 600px;
    margin-top: 80px;
  }

  @media (max-width: 1024px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default Roadmap;
