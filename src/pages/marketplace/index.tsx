import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { SectionEach } from "../../components/layout/section";
import { BsGrid } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { HiViewList } from "react-icons/hi";
import { dataGPUList } from "../../data/gpu";
import CardGPU from "../../components/cards/cardGPU";

const Marketplace = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [isLayout, setIsLayout] = useState(0);

  return (
    <StyledComponent>
      <BackCircuit01>
        <img
          src={"./assets/images/backgrounds/backCircuit01.png"}
          width={"100%"}
          alt=""
        />
      </BackCircuit01>
      <BackCircuit02>
        <img
          src={"./assets/images/backgrounds/backCircuit02.png"}
          width={"100%"}
          alt=""
        />
      </BackCircuit02>
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
        <SectionGridGPU>
          {dataGPUList.map((each, index) => {
            return <CardGPU key={index} data={each} />;
          })}
        </SectionGridGPU>
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
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
`;

const BackCircuit02 = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
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

const SectionGridGPU = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 50px;
  margin-bottom: 150px;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 600px) {
    grid-column-gap: 0px;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;
export default Marketplace;
