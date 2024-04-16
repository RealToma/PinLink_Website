import { Box } from "@mui/material";
import styled from "styled-components";
import { useScroll } from "../../utils/hooks.ui";

const CardFeature = ({ data }: any) => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();
  return (
    <StyledComponent isvisible={visibleCard1 ? 1 : 0} ref={cardRef1}>
      <TextHead>{data.textHead}</TextHead>
      <TextContent>{data.textContent}</TextContent>
      <ImgBackGradient></ImgBackGradient>
      <ImgBack>
        <img src={data.imgBack} width={"100%"} alt="icon" />
      </ImgBack>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 20px;
  background: #191919;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 20px 5px #999;
  }
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};
  z-index: 5;

  @media (max-width: 1440px) {
    padding: 25px;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 12px;
  }
`;

// const SectionText = styled(Box)`
//   display: flex;
//   width: 100%;
//   position: absolute;

//   background: #191919;
//   top: 0px;
//   left: 0px;
// `;

const TextHead = styled(Box)`
  display: flex;
  width: 60%;
  color: #c1ff72;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 104.167% */
  z-index: 4;

  @media (max-width: 1440px) {
    font-size: 40px;
    line-height: 40px; /* 104.167% */
  }
  @media (max-width: 768px) {
    width: 70%;
    font-size: 25px;
    line-height: 30px; /* 150% */
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 20px;
    line-height: 25px; /* 150% */
  }
`;

const TextContent = styled(Box)`
  display: flex;
  width: 60%;
  color: #c6c6c6;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */

  margin-top: 15px;
  z-index: 4;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 70%;
    font-size: 13px;
    line-height: 20px; /* 150% */
    margin-top: 12px;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px;
    line-height: 15px; /* 150% */
    margin-top: 12px;
  }
`;

const ImgBackGradient = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(25, 25, 25, 1) 60%,
    rgba(25, 25, 25, 0.3) 100%
  );
  top: 0px;
  left: 0px;
  z-index: 3;
`;

const ImgBack = styled(Box)`
  display: flex;
  height: 100%;
  position: absolute;
  width: 50%;
  right: -100px;
  top: 0px;
  z-index: 2;
  > img {
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export default CardFeature;
