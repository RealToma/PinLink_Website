import { Box } from "@mui/material";
import styled from "styled-components";
import { SectionEach } from "../../components/layout/section";
import CardStats from "../../components/cards/cardStats";
import { useNavigate } from "react-router-dom";

const Stake = () => {
  const navigate = useNavigate();

  return (
    <StyledComponent>
      <BackRightLogo>
        <img
          src={"/assets/images/backgrounds/backEffect/logoGreen01.png"}
          width={"100%"}
          alt=""
        />
      </BackRightLogo>
      <SectionEach>
        {/* <BackLeftBlue03>
          <img
            src={"./assets/images/backgrounds/backGradient02.png"}
            width={"100%"}
            alt=""
          />
        </BackLeftBlue03> */}
        <SectionTopText>
          <TextTopHead>Earn PinLink Staking Rewards</TextTopHead>
          <TextTopDescription>
            Participate in securing the PinLink Ecosystem, earn platform fees
            and staking rewards!
          </TextTopDescription>
          <BackRightLogoMobile>
            <img
              src={"/assets/images/backgrounds/backEffect/logoGreen01.png"}
              width={"100%"}
              alt=""
            />
          </BackRightLogoMobile>
        </SectionTopText>
        <ButtonStake
          onClick={() => {
            navigate("/stake_now");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Stake Now
        </ButtonStake>
        <SectionStats02>
          <CardStats>
            <TextStatsHead02>Market Cap</TextStatsHead02>
            <TextStatsBody02>$369.32M</TextStatsBody02>
          </CardStats>
          <CardStats>
            <TextStatsHead02>APY%</TextStatsHead02>
            <TextStatsBody02>45.69%</TextStatsBody02>
          </CardStats>
          <CardStats>
            <TextStatsHead02>Staked Amount</TextStatsHead02>
            <TextStatsBody02>$2869.32M</TextStatsBody02>
          </CardStats>
        </SectionStats02>
      </SectionEach>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
`;

const BackRightLogo = styled(Box)`
  display: flex;
  position: absolute;
  right: -300px;
  top: -400px;
  width: 1500px;
  z-index: 4;

  @media (max-width: 1600px) {
    width: 1200px;
    right: -300px;
    top: -300px;
  }
  @media (max-width: 1366px) {
    width: 1000px;
    right: -250px;
    top: -200px;
  }
  @media (max-width: 1023px) {
    width: 700px;
    right: -150px;
    top: -120px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

// const BackLeftBlue03 = styled(Box)`
//   display: flex;
//   position: absolute;
//   width: 2000px;
//   aspect-ratio: 1;
//   right: -30%;
//   bottom: -100%;
//   z-index: -1;
// `;

const SectionTopText = styled(Box)`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin-top: 50px;
  z-index: 8;
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
    align-items: center;
  }
`;

const TextTopHead = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 80px;
  font-style: normal;
  font-weight: 850;
  line-height: 100px; /* 107.031% */

  @media (max-width: 1600px) {
    font-size: 60px;
    line-height: 80px; /* 107.031% */
  }
  @media (max-width: 1366px) {
    font-size: 50px;
    line-height: 60px; /* 107.031% */
  }
  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 50px; /* 107.031% */
  }
  @media (max-width: 767px) {
    font-size: 35px;
    text-align: center;
  }
  @media (max-width: 430px) {
    font-size: 30px;
    line-height: 40px; /* 107.031% */
  }
`;

const TextTopDescription = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 60px; /* 137.5% */

  margin-top: 15px;

  @media (max-width: 1600px) {
    font-size: 25px;
    line-height: 40px; /* 107.031% */
  }
  @media (max-width: 1366px) {
    font-size: 20px;
    line-height: 30px; /* 107.031% */
  }
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 25px; /* 107.031% */
    margin-top: 5px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (max-width: 430px) {
    font-size: 15px;
    line-height: 20px; /* 107.031% */
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #c1ff72;
  color: #fff;
  text-align: center;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 850;

  margin-top: 20px;
  z-index: 100;
  user-select: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background-color: #c1ff72;
    color: black;
  }

  @media (max-width: 1440px) {
    width: 160px;
    height: 40px;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    width: 150px;
    font-size: 18px;
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 621px) {
    top: 440px;
  }
  @media (max-width: 430px) {
    top: 430px;
  }
`;

const SectionStats02 = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 80px;
  margin-top: 200px;
  margin-bottom: 200px;
  @media (max-width: 1440px) {
    grid-column-gap: 50px;
    margin-top: 150px;
  }
  @media (max-width: 1366px) {
    grid-column-gap: 30px;
    margin-top: 100px;
  }
  @media (max-width: 1023px) {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  @media (max-width: 767px) {
    margin-top: 320px;
    margin-bottom: 50px;
    margin-top: 390px;
  }
  @media (max-width: 621px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-top: 350px;
  }
  @media (max-width: 430px) {
    margin-top: 370px;
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
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
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
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const BackRightLogoMobile = styled(Box)`
  display: none;
  position: absolute;
  left: 50%;
  width: 800px;
  transform: translateX(-50%);
  top: -150px;
  @media (max-width: 767px) {
    display: flex;
  }
  @media (max-width: 621px) {
    top: -100px;
  }
`;

export default Stake;
