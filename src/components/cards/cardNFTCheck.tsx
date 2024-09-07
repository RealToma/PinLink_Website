import { Box } from "@mui/material";
import styled from "styled-components";

const CardNFTCheck = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionImage>
        <img src={data.nftImg} width={"100%"} height={"100%"} alt="nft" />
      </SectionImage>
      <SectionContent>
        <SectionTop>
          <TextNFTName>Checks</TextNFTName>
          <SectionOwner>
            <ImgOwner>
              <img src={data.nftOwnerImg} width={"100%"} alt="" />
            </ImgOwner>
            <TextOwnerName>{data.nftOwner}</TextOwnerName>
          </SectionOwner>
        </SectionTop>
        <SectionDown>
          <ButtonExplore02>Learn More</ButtonExplore02>
        </SectionDown>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 300px;

  flex-direction: column;
  margin-right: 50px;
  padding: 15px;
  border-radius: 20px;
  background: #202020;
  
  z-index: 15;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    > div > img {
      /* transform: scale(1.2); */
    }
    transform: scale(1.1);
    /* box-shadow: 0px 0px 15px 3px #c1ff72; */
  }

  @media (max-width: 1600px) {
    margin-right: 40px;
  }
  @media (max-width: 768px) {
    margin-right: 30px;
    width: 250px;
    padding: 12px;
  }
  @media (max-width: 430px) {
    margin-right: 10px;
    width: 200px;
    padding: 8px;
    border-radius: 12px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 100%;
  height: 130px;
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  > img {
    transition: 0.3s;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    box-shadow: 8.443px 12.664px 16.885px 0px rgba(35, 28, 22, 0.24);
  }

  @media (max-width: 768px) {
    height: 100px;
  }
  @media (max-width: 430px) {
    height: 80px;
    border-radius: 10px;
  }
`;

const TextNFTName = styled(Box)`
  width: 100%;
  color: #fff;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const SectionOwner = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 5px;
`;

const ImgOwner = styled(Box)`
  display: flex;
  width: 25px;
  margin-right: 10px;
  > img {
    border-radius: 100%;
    aspect-ratio: 1;
  }

  @media (max-width: 768px) {
    width: 22px;
    margin-right: 8px;
  }
  @media (max-width: 430px) {
    width: 18px;
    margin-right: 5px;
  }
`;

const TextOwnerName = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const SectionTop = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ButtonExplore02 = styled(Box)`
  display: flex;
  width: 120px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #c1ff72;
  color: white;
  font-family: Garet;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;

  cursor: pointer;
  user-select: none;

  transition: all.3s;
  &:hover {
    color: black;
    background-color: #c1ff72;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 14px;
  }
  @media (max-width: 430px) {
    width: 90px;
    height: 20px;
    font-size: 12px;
  }
`;

const SectionDown = styled(Box)`
  display: flex;
`;

export default CardNFTCheck;
