import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { SectionEach } from "../../components/layout/section";
import { BsGrid } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { HiViewList } from "react-icons/hi";
import { FaLock, FaUnlock } from "react-icons/fa6";
import InputMintDetails from "../../components/input/inputMintDetails";
import { dataMintList } from "../../data/mint";

const Mint = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [isLayout, setIsLayout] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  return (
    <StyledComponent>
      <BackCircuit01>
        <SectionBackOverlay01></SectionBackOverlay01>
        <SectionBackOverlay02></SectionBackOverlay02>
        <video autoPlay loop muted>
          <source
            src={"./assets/videos/animationCircuit01.mp4"}
            type="video/mp4"
          />
        </video>
      </BackCircuit01>

      <SectionEach>
        <SectionMobileFilter>
          <SectionSearchInput>
            <InputSearch
              component="input"
              placeholder="Search tokens by name, ticker, or address..."
            ></InputSearch>
          </SectionSearchInput>
          <SectionMobileViewOptions>
            <SectionAllOpen>
              <ButtonAllOpen
                isactive={isAllOpen === false ? 1 : 0}
                onClick={() => {
                  setIsAllOpen(false);
                }}
              >
                All
              </ButtonAllOpen>
              <ButtonAllOpen
                isactive={isAllOpen === true ? 1 : 0}
                onClick={() => {
                  setIsAllOpen(true);
                }}
              >
                Open
              </ButtonAllOpen>
            </SectionAllOpen>
            <SectionSearchDisplayList>
              <ButtonDisplay
                isactive={isLayout === 0 ? 1 : 0}
                onClick={() => {
                  setIsLayout(0);
                }}
              >
                <BsGrid />
              </ButtonDisplay>
              <ButtonDisplay
                isactive={isLayout === 1 ? 1 : 0}
                onClick={() => {
                  setIsLayout(1);
                }}
              >
                <HiOutlineQueueList />
              </ButtonDisplay>
              <ButtonDisplay
                isactive={isLayout === 2 ? 1 : 0}
                onClick={() => {
                  setIsLayout(2);
                }}
              >
                <HiViewList />
              </ButtonDisplay>
            </SectionSearchDisplayList>
          </SectionMobileViewOptions>
        </SectionMobileFilter>
        <SectionSearch>
          <SectionSearchLeft>
            <SectionSearchInput>
              <InputSearch
                component="input"
                placeholder="Search tokens by name, ticker, or address..."
              ></InputSearch>
            </SectionSearchInput>
            <SectionAllOpen>
              <ButtonAllOpen
                isactive={isAllOpen === false ? 1 : 0}
                onClick={() => {
                  setIsAllOpen(false);
                }}
              >
                All
              </ButtonAllOpen>
              <ButtonAllOpen
                isactive={isAllOpen === true ? 1 : 0}
                onClick={() => {
                  setIsAllOpen(true);
                }}
              >
                Open
              </ButtonAllOpen>
            </SectionAllOpen>
          </SectionSearchLeft>
          <SectionSearchDisplayList>
            <ButtonDisplay
              isactive={isLayout === 0 ? 1 : 0}
              onClick={() => {
                setIsLayout(0);
              }}
            >
              <BsGrid />
            </ButtonDisplay>
            <ButtonDisplay
              isactive={isLayout === 1 ? 1 : 0}
              onClick={() => {
                setIsLayout(1);
              }}
            >
              <HiOutlineQueueList />
            </ButtonDisplay>
            <ButtonDisplay
              isactive={isLayout === 2 ? 1 : 0}
              onClick={() => {
                setIsLayout(2);
              }}
            >
              <HiViewList />
            </ButtonDisplay>
          </SectionSearchDisplayList>
        </SectionSearch>
        <SectionMint>
          <SectionMintDetails>
            <SectionImage>
              <img
                src={"./assets/images/gpu/mint.png"}
                width={"100%"}
                height={"100%"}
                alt="mint"
              />
              <IconLocked
                active={isLocked ? 1 : 0}
                onClick={() => setIsLocked(!isLocked)}
              >
                {isLocked ? <FaLock /> : <FaUnlock />}
              </IconLocked>
            </SectionImage>
            <SectionEachDetailsGroup>
              {dataMintList.map((each, index) => {
                return <InputMintDetails key={index} data={each} />;
              })}
            </SectionEachDetailsGroup>
            <ButtonStake>TOKENIZE</ButtonStake>
          </SectionMintDetails>
        </SectionMint>
      </SectionEach>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackCircuit01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  /* opacity: 0.6; */
  /* filter: brightness(2); */
  /* overflow: hidden; */
  /* border-radius: 200px; */
  box-sizing: border-box;
  > video {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SectionBackOverlay01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 300px;
  position: absolute;
  top: -100px; /* Adjust to match the padding size */
  left: 0px; /* Adjust to match the padding size */
  filter: blur(10px);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  ); /* Set the gradient opacity of the video padding section */
  z-index: 1;
`;

const SectionBackOverlay02 = styled(Box)`
  display: flex;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: -100px; /* Adjust to match the padding size */
  left: 0px; /* Adjust to match the padding size */
  filter: blur(10px);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  ); /* Set the gradient opacity of the video padding section */
  z-index: 1;
`;

const SectionMint = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 200px;
  box-sizing: border-box;
  margin-top: 50px;
  margin-bottom: 150px;

  @media (max-width: 1600px) {
    padding: 0px 100px;
  }

  @media (max-width: 1366px) {
    padding: 0px 0px;
  }
`;

const SectionMintDetails = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 20px;
  border: 3px solid #77798f;
  background: var(--lg, #202020);
  box-shadow: 0px 32.132px 155.127px 0px rgba(0, 0, 0, 0.62);
  padding: 25px;
  box-sizing: border-box;

  @media (max-width: 1366px) {
    border-radius: 12px;
    padding: 15px;
    border: 2px solid #77798f;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  border: 2px dashed #fff;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
  > img {
    transition: 0.3s;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    > img {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1366px) {
    height: 250px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 430px) {
    height: 150px;
  }
`;

const IconLocked = styled(Box)`
  display: flex;
  position: absolute;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1) inset;
  right: 20px;
  top: 20px;
  user-select: none;
  font-size: 25px;
  color: ${({ active }: any) => (active ? "#e0e0e0" : "#c1ff72")};
  transition: all.3s;
  &:hover {
    background: #121212;
  }

  @media (max-width: 1366px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 17px;
    right: 10px;
    top: 10px;
  }
`;

const SectionEachDetailsGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 1366px) {
    margin-top: 20px;
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid #c1ff72;
  color: #fff;
  text-align: center;
  font-family: Garet;
  font-size: 30px;
  font-style: normal;
  font-weight: 850;

  user-select: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background-color: #c1ff72;
    color: black;
  }

  @media (max-width: 1600px) {
    height: 55px;
    font-size: 27px;
  }

  @media (max-width: 1366px) {
    height: 50px;
    font-size: 25px;
    border: 2px solid #c1ff72;
  }
  @media (max-width: 900px) {
    height: 40px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    height: 35px;
    font-size: 18px;
  }
`;

const SectionSearch = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SectionMobileFilter = styled(Box)`
  display: none;
  width: 100%;

  align-items: center;
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionMobileViewOptions = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

const SectionSearchLeft = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-right: 15px;
  }
`;

const SectionSearchInput = styled(Box)`
  display: flex;
  width: 400px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #c1ff72;
  background: rgba(193, 255, 114, 0.1);
  box-shadow: 0px 0px 0px 0px #fff inset,
    0px 0px 0px 1px rgba(148, 189, 255, 0.3) inset;

  padding: 0px 10px;
  box-sizing: border-box;

  margin-right: 15px;

  @media (max-width: 900px) {
    flex: 1;
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const SectionAllOpen = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4px;
  align-items: center;
  height: 40px;
  padding: 0px 4px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #c1ff72;
  background: rgba(193, 255, 114, 0.1);
  box-shadow: 0px 0px 0px 0px #fff inset,
    0px 0px 0px 1px rgba(148, 189, 255, 0.3) inset;
`;

const ButtonAllOpen = styled(Box)`
  display: flex;
  height: 32px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ isactive }: any) => (isactive ? "white" : "none")};
  color: ${({ isactive }: any) => (isactive ? "#161616" : "white")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  transition: all.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${({ isactive }: any) => (isactive ? "none" : "#c1ff72")};
  }
`;

const InputSearch = styled(Box)`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const SectionSearchDisplayList = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 4px;
  height: 40px;
  padding: 0px 4px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #c1ff72;
  background: rgba(193, 255, 114, 0.1);
  box-shadow: 0px 0px 0px 0px #fff inset,
    0px 0px 0px 1px rgba(148, 189, 255, 0.3) inset;

  @media (max-width: 900px) {
    margin-left: 15px;
  }
`;

const ButtonDisplay = styled(Box)`
  display: flex;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ isactive }: any) => (isactive ? "white" : "none")};
  color: ${({ isactive }: any) => (isactive ? "#161616" : "white")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  transition: all.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${({ isactive }: any) => (isactive ? "none" : "#c1ff72")};
  }
`;

export default Mint;
