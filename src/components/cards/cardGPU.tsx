import { Box } from "@mui/material";
import styled from "styled-components";
import { FaLock, FaUnlock } from "react-icons/fa";

const CardGPU = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionImage>
        <img src={data.img} width={"100%"} height={"100%"} alt="gpu" />
        <IconLocked active={data.isLocked ? 1 : 0}>
          {data.isLocked ? <FaLock /> : <FaUnlock />}
        </IconLocked>
      </SectionImage>
      <TextGPUName>{data.nameGpu}</TextGPUName>
      <SectionGPUDetail>
        <SectionEachGPUDetail>
          {data.nameMotherboard}
          <IconCircle></IconCircle>
        </SectionEachGPUDetail>
        <SectionEachGPUDetail>
          {data.nameCpu}
          <IconCircle></IconCircle>
        </SectionEachGPUDetail>
        <SectionEachGPUDetail>
          {data.nameRam}
          <IconCircle></IconCircle>
        </SectionEachGPUDetail>
        <SectionEachGPUDetail>
          {data.namePower}
          <IconCircle></IconCircle>
        </SectionEachGPUDetail>
        <SectionEachGPUDetail>
          {data.nameNvidia}
          <IconCircle></IconCircle>
        </SectionEachGPUDetail>
      </SectionGPUDetail>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 3px solid #77798f;
  background: rgba(32, 32, 32, 0.8);
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(12px);
  transition: 0.3s;
  &:hover {
    > div:nth-child(1) > img {
      transform: scale(1.2);
    }
    /* box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.7); */
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 2px dashed #fff;
  height: 150px;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  > img {
    transition: 0.3s;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const IconLocked = styled(Box)`
  display: flex;
  position: absolute;
  user-select: none;
  right: 15px;
  top: 15px;
  font-size: 25px;
  color: ${({ active }: any) => (active ? "#e0e0e0" : "#c1ff72")};

  @media (max-width: 748px) {
    font-size: 20px;
  }
`;

const TextGPUName = styled(Box)`
  display: flex;
  width: 70%;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 18px;
    margin-top: 10px;
  }
  @media (max-width: 430px) {
    width: 90%;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const SectionGPUDetail = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  @media (max-width: 748px) {
    margin-top: 15px;
  }
`;

const SectionEachGPUDetail = styled(Box)`
  display: flex;
  width: 90%;
  position: relative;
  color: #e0e0e0;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 5px;
  }
`;

const IconCircle = styled(Box)`
  display: flex;
  position: absolute;
  border-radius: 100%;
  width: 9px;
  height: 9px;
  top: 7px;
  left: -20px;
  background-color: #d9d9d9;
`;

export default CardGPU;
