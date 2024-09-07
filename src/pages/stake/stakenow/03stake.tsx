import { Box } from "@mui/material";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const SectionStake = () => {
  const [valueStake, setValueStatke] = useState(0);

  return (
    <StyledComponent>
      <SectionInsideStake>
        <TextSubject>Stake PinLink</TextSubject>
        <SectionInputAmount>
          <IconPinLink>
            <img src={"./assets/images/icons/logo.png"} alt="ethereum" />
          </IconPinLink>
          <SectionInputStake>
            <InputStake
              component="input"
              placeholder="Input stake amount"
              // value={valueStake}
              value={valueStake === 0 ? "" : valueStake}
              onChange={(e: any) => {
                setValueStatke(e.target.value);
              }}
            ></InputStake>
          </SectionInputStake>
          <ButtonMax
            onClick={() => {
              setValueStatke(5);
            }}
          >
            Max
          </ButtonMax>
        </SectionInputAmount>
        <TextBalance>Wallet Balance: 5ETH</TextBalance>
        <SectionStakeMore>
          <SectionEachState>
            <TextEachState>You’ll receive:</TextEachState>
            <TextEachState>4.5dETH</TextEachState>
          </SectionEachState>
          <SectionEachState>
            <TextEachState>Exchange rate:</TextEachState>
            <SectionEachStateText01>
              <TextEachState>1ETH</TextEachState>
              <IconRight>
                <FaArrowRight />
              </IconRight>
              <TextEachState>1dETH</TextEachState>
            </SectionEachStateText01>
          </SectionEachState>
          <SectionEachState>
            <TextEachState>Transaction fee:</TextEachState>
            <TextEachState>$45</TextEachState>
          </SectionEachState>
          <SectionEachState>
            <TextEachState>Annual APR:</TextEachState>
            <TextEachState>4.8%</TextEachState>
          </SectionEachState>
          <ButtonStake>STAKE</ButtonStake>
        </SectionStakeMore>
      </SectionInsideStake>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 100px;
  align-items: center;
`;

const SectionInsideStake = styled(Box)`
  display: flex;
  width: 650px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 35px;
  font-style: normal;
  font-weight: 850;
  @media (max-width: 1440px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const SectionInputAmount = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  border-radius: 20px;
  border: 3px solid #77798f;
  background: #202020;
  user-select: nono;
  /* Drop Shadow */

  align-items: center;
  margin-top: 30px;
  overflow: hidden;
  box-shadow: 0px 18px 86.9px 0px rgba(0, 0, 0, 0.62);
  transition: all.3s;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.62);
  }
  @media (max-width: 1440px) {
    height: 60px;
    border: 2px solid #77798f;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    height: 50px;
    border: 2px solid #77798f;
    margin-top: 10px;
    border-radius: 12px;
  }

  @media (max-width: 430px) {
    height: 45px;
    margin-top: 10px;
  }
`;

const IconPinLink = styled(Box)`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  border-right: 2px solid #77798f;
  background: #12191a;
  > img {
    width: 50%;
  }
`;

const SectionInputStake = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 1440px) {
    padding: 0px 15px;
  }

  @media (max-width: 430px) {
    padding: 0px 10px;
  }
`;

const InputStake = styled(Box)`
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const ButtonMax = styled(Box)`
  display: flex;
  width: 150px;
  background: #12191a;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #77798f;
  color: white;
  text-align: center;
  font-family: Garet;
  font-size: 30px;
  font-style: normal;
  font-weight: 850;

  cursor: pointer;
  user-select: none;
  transition: all.3s;
  &:hover {
    color: #c1ff72;
  }

  @media (max-width: 1440px) {
    width: 120px;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    width: 100px;
    font-size: 20px;
  }
  @media (max-width: 430px) {
    width: 70px;
    font-size: 18px;
  }
`;

const TextBalance = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #d1d1d1;
  font-family: Garet;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  margin-top: 10px;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 5px;
  }
`;

const SectionStakeMore = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 3px solid #77798f;
  background: #202020;

  box-shadow: 0px 18px 86.9px 0px rgba(0, 0, 0, 0.62);
  transition: all.3s;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.62);
  }
  margin-top: 50px;

  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 15px;
  }
`;

const SectionEachState = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1440px) {
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const TextEachState = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Garet;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SectionEachStateText01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconRight = styled(Box)`
  display: flex;
  margin: 0px 5px;
  color: #fff;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid #c1ff72;
  color: #fff;
  text-align: center;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 850;

  margin-top: 10px;

  user-select: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background-color: #c1ff72;
    color: black;
  }

  @media (max-width: 1440px) {
    height: 40px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    border: 2px solid #c1ff72;
    font-size: 18px;
  }

`;

export default SectionStake;
