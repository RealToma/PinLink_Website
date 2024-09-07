import { Box } from "@mui/material";
import styled from "styled-components";
import CardStats from "../../../components/cards/cardStats";

const SectionStats = () => {
  return (
    <StyledComponent>
      <SectionStats01>
        <SectionTVL>
          <TextStatsHead01>TVL</TextStatsHead01>
          <TextStatsBody01>$87,492,163.10</TextStatsBody01>
        </SectionTVL>
        <SectionRewards>
          <TextStatsHead01>Rewards/Day</TextStatsHead01>
          <TextStatsBody01>$7,492,163.10</TextStatsBody01>
        </SectionRewards>
      </SectionStats01>
      <SectionStats02>
        <CardStats>
          <TextStatsHead02>Total Staked</TextStatsHead02>
          <TextStatsBody02>$2869.32M</TextStatsBody02>
        </CardStats>
        <CardStats>
          <TextStatsHead02>Market Cap</TextStatsHead02>
          <TextStatsBody02>$369.32M</TextStatsBody02>
        </CardStats>
        <CardStats>
          <TextStatsHead02>Staked Amount</TextStatsHead02>
          <TextStatsBody02>$2869.32M</TextStatsBody02>
        </CardStats>
        <CardStats>
          <TextStatsHead02>Stake Rate</TextStatsHead02>
          <TextStatsBody02>45.69%</TextStatsBody02>
        </CardStats>
        <CardStats>
          <SectionCardInside>
            <ImageIcon01>
              <img src={"./assets/images/icons/ethereum.png"} alt="ethereum" />
            </ImageIcon01>
            <TextStatsHead03>$65,123 ETH</TextStatsHead03>
          </SectionCardInside>
        </CardStats>
        <CardStats>
          <SectionCardInside>
            <ImageIcon01>
              <img src={"./assets/images/icons/logo.png"} alt="ethereum" />
            </ImageIcon01>
            <SectionCardTextInside>
              <TextStatsHead03>$135,123 Pinlink</TextStatsHead03>
              <TextStatsBody03>115% This Week</TextStatsBody03>
            </SectionCardTextInside>
          </SectionCardInside>
        </CardStats>
      </SectionStats02>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 430px) {
    margin-top: 30px;
  }
`;

const SectionStats01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 120px;
  border-radius: 15px;
  background: #202020;

  /* Drop Shadow */
  box-shadow: 0px 18px 86.9px 0px rgba(0, 0, 0, 0.62);

  @media (max-width: 1440px) {
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 80px;
    border-radius: 8px;
  }
`;

const SectionTVL = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right: 3px solid #636363;
`;

const SectionRewards = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextStatsHead01 = styled(Box)`
  color: #c1ff72;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 850;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
const TextStatsBody01 = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  margin-top: 10px;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 5px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

const SectionStats02 = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 80px;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 60px;
  }
  @media (max-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
  }
`;

const TextStatsHead02 = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 30px;
  font-style: normal;
  font-weight: 850;

  @media (max-width: 1440px) {
    font-size: 25px;
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
const TextStatsBody02 = styled(Box)`
  color: #c1ff72;
  font-family: Garet;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  margin-top: 10px;
  @media (max-width: 1440px) {
    font-size: 25px;
    margin-top: 5px;
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const SectionCardInside = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextStatsHead03 = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 850;
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const TextStatsBody03 = styled(Box)`
  display: flex;
  color: #c1ff72;
  font-family: Garet;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  margin-top: 10px;
  @media (max-width: 1440px) {
    font-size: 16px;
    margin-top: 5px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ImageIcon01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background: #12191a;
  box-shadow: 0px 4px 7.7px 0px rgba(0, 0, 0, 0.27);
  margin-right: 15px;
  > img {
    height: 65%;
  }
  @media (max-width: 1440px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
`;

const SectionCardTextInside = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export default SectionStats;
