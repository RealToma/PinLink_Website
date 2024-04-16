import { Box } from "@mui/material";
import styled from "styled-components";
import { useScroll } from "../../utils/hooks.ui";

const CardIntro = ({ data }: any) => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();

  return (
    <StyledComponent ref={cardRef1} isvisible={visibleCard1 ? 1 : 0}>
      <TextHead>{data.textHead}</TextHead>
      <TextContent>{data.textContent}</TextContent>
      <IconIntro>
        <img src={data.icon} width={"70%"} alt="icon" />
      </IconIntro>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 20px;
  background: #202020;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;

  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};

  cursor: pointer;
  transition: 0.5s;
  transform: ${(p: any) => `translateY(${p.isvisible ? "0px" : "200px"})`};
  &:hover {
    /* transform: scale(1.05); */
    box-shadow: 0px 0px 20px 5px #999;
  }

  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 18px;
  }
  @media (max-width: 430px) {
    border-radius: 8px;
    padding: 15px;
  }
`;

const IconIntro = styled(Box)`
  display: flex;
  position: absolute;
  top: 30px;
  right: 10px;
  @media (max-width: 1440px) {
    right: 0px;
    top: 20px;
  }
`;

const TextHead = styled(Box)`
  color: #f8f8f8;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px; /* 100% */
  letter-spacing: -1px;
  width: 80%;

  @media (max-width: 1440px) {
    font-size: 27px;
  }
  @media (max-width: 768px) {
    font-size: 23px;
  }
  @media (max-width: 430px) {
    line-height: 30px; /* 100% */
    font-size: 20px;
  }
`;

const TextContent = styled(Box)`
  color: #c6c6c6;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */

  margin-top: 10px;
  width: 80%;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
    line-height: 20px; /* 150% */
  }
`;

export default CardIntro;
