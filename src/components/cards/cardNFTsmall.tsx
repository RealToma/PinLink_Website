import { Box } from "@mui/material";
import styled from "styled-components";
import { convertTimestampToTime } from "../../utils/functions";

const CardNFTSmall = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionImage>
        <img src={data.nftImg} width={"100%"} alt="nft" />
      </SectionImage>
      <TextNFTName>{data.nftName}</TextNFTName>
      <SectionOwner>
        <ImgOwner>
          <img src={data.nftOwnerImg} width={"100%"} alt="" />
        </ImgOwner>
        <TextOwnerName>{data.nftOwner}</TextOwnerName>
      </SectionOwner>
      <SectionBid>
        <SectionEachBid>
          <TextBidTitle>Current bid</TextBidTitle>
          <TextBidContent>{data.bidPrice}</TextBidContent>
        </SectionEachBid>
        <SectionEachBid style={{ alignItems: "flex-end" }}>
          <TextBidTitle>Ending in</TextBidTitle>
          <TextBidContent>
            {convertTimestampToTime(data.bidEndTimestamp)}
          </TextBidContent>
        </SectionEachBid>
      </SectionBid>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  background: linear-gradient(180deg, #3b3e4e 0%, #999 100%);
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.62);
  cursor: pointer;
  user-select: none;
  /* transition: 0.3s;
  &:hover {
    > div > img {
      transform: scale(1.2);
    }
    box-shadow: 0px 0px 15px 3px #c1ff72;
  } */

  @media (max-width: 1366px) {
    padding: 8px;
  }
  @media (max-width: 1023px) {
    border-radius: 12px;
    padding: 6px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  > img {
    /* transition: 0.3s; */
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    box-shadow: 8.443px 12.664px 16.885px 0px rgba(35, 28, 22, 0.24);
  }
`;

const TextNFTName = styled(Box)`
  width: 100%;
  margin-top: 10px;
  color: #fff;
  font-family: "Euclid Circular A";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    font-size: 18px;
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
  width: 20px;
  margin-right: 5px;
  > img {
    border-radius: 100%;
    aspect-ratio: 1;
  }
  @media (max-width: 1600px) {
    width: 18px;
  }
  @media (max-width: 768px) {
    width: 15px;
  }
`;

const TextOwnerName = styled(Box)`
  font-family: "Euclid Circular A";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(90deg, #fbed96 0%, #abecd6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SectionBid = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 8px;
`;

const SectionEachBid = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextBidTitle = styled(Box)`
  color: #fff6;
  font-family: "Euclid Circular A";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const TextBidContent = styled(Box)`
  color: #fff;
  font-family: "Euclid Circular A";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;

  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default CardNFTSmall;
