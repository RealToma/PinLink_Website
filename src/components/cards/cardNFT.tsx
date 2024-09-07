import { Box } from "@mui/material";
import styled from "styled-components";
// import { convertTimestampToTime } from "../../utils/functions";

const CardNFT = ({ data }: any) => {
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
        {/* <SectionEachBid>
          <TextBidTitle>Price</TextBidTitle>
          <TextBidContent>{data.bidPrice} ETH </TextBidContent>
        </SectionEachBid>
        <SectionEachBid style={{ alignItems: "flex-end" }}>
          <TextBidTitle>Ending in</TextBidTitle>
          <TextBidContent>
            {convertTimestampToTime(data.bidEndTimestamp)}
          </TextBidContent>
        </SectionEachBid> */}
        <TextBidTitle>Price</TextBidTitle>
        <TextBidContent>{data.bidPrice} ETH </TextBidContent>
      </SectionBid>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;

  border-radius: 15px;
  /* background: #202020; */
  background: linear-gradient(180deg, #3b3e4e 0%, #202020 100%);
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.62);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    > div > img {
      transform: scale(1.2);
    }
    /* box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.7); */
    box-shadow: 0px 0px 15px 5px #999;
  }

  @media (max-width: 1600px) {
    padding: 12px;
  }
  @media (max-width: 1366px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
    padding: 12px;
  }
  @media (max-width: 500px) {
    padding: 5px;
  }
  @media (max-width: 430px) {
    padding: 10px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 12px;
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
`;

const TextNFTName = styled(Box)`
  width: 100%;
  margin-top: 15px;
  color: #fff;
  font-family: "Euclid Circular A";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1600px) {
    margin-top: 10px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SectionOwner = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
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
    width: 20px;
    margin-right: 5px;
  }
`;

const TextOwnerName = styled(Box)`
  font-family: "Euclid Circular A";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(90deg, #fbed96 0%, #abecd6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionBid = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

// const SectionEachBid = styled(Box)`
//   display: flex;
//   flex-direction: column;
// `;

const TextBidTitle = styled(Box)`
  color: #fff6;
  font-family: "Euclid Circular A";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextBidContent = styled(Box)`
  color: #fff;
  font-family: "Euclid Circular A";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default CardNFT;
