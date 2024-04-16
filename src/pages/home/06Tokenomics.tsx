import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { useState } from "react";
import IconPoint from "../../components/icon/iconPoint";
import TextTokenDetails from "../../components/text/textToken";
import { dataTokenDetails } from "../../data/text";
import { useScroll } from "../../utils/hooks.ui";
import Chart from "react-apexcharts";

const dataChart: any = {
  series: [70, 10, 20],
  options: {
    legend: {
      show: false,
    },
    labels: ["Uniswap LP: 70%", "Treasury: 10%", "Staking Emissions: 20%"],
    tooltip: {
      enabled: true,
    },
    colors: ["#8bb851", "#47a32b", "#2b4110"],
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["white"],
        fontSize: "10px",
        fontFamily: "Inter",
        fontWeight: "300",
      },
    },
  },
};

const Tokenomics = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  // const { visible: visibleCard1, element: cardRef1 } = useScroll();
  const { visible: visibleCard5, element: cardRef5 } = useScroll();

  return (
    <StyledComponent id={"Tokenomics"}>
      <TextSubject textSubject={"Tokenomics"} />
      <SectionDetails ref={cardRef5} isvisible={visibleCard5 ? 1 : 0}>
        <SectionChart>
          <SectionImageChart>
            <Chart
              options={dataChart?.options}
              series={dataChart?.series}
              type="pie"
            />
            {/* <img
              src={"./assets/images/icons/chart.png"}
              width={"100%"}
              alt="chart"
            /> */}
          </SectionImageChart>
          <SectionButtonSwitch>
            <ButtonSwitch
              isactive={isSwitched ? 1 : 0}
              onClick={() => {
                setIsSwitched(false);
              }}
            >
              Pinlink
            </ButtonSwitch>
            <ButtonSwitch
              isactive={isSwitched ? 0 : 1}
              onClick={() => {
                setIsSwitched(true);
              }}
            >
              $PIN
            </ButtonSwitch>
          </SectionButtonSwitch>
          <SectionChartDetails>
            <SectionEachDetailsText>
              <IconPoint color={"#8bb851"} />
              <TextTokeDetails>Uniswap LP: 70%</TextTokeDetails>
            </SectionEachDetailsText>
            <SectionEachDetailsText>
              <IconPoint color={"#47a32b"} />
              <TextTokeDetails>Treasury: 10%</TextTokeDetails>
            </SectionEachDetailsText>
            <SectionEachDetailsText>
              <IconPoint color={"#2b4110"} />
              <TextTokeDetails>Staking Emissions: 20%</TextTokeDetails>
            </SectionEachDetailsText>
            {/* <SectionEachDetails> */}
            {/* <SectionEachDetailsText>
              <IconPoint color={"#7CE53E"} />
              <TextTokeDetails>Treasury: 10% reserved</TextTokeDetails>
            </SectionEachDetailsText>
            <SectionEachDetailsText>
              <IconPoint color={"#66C62E"} />
              <TextTokeDetails>Centralized exchanges: 5%</TextTokeDetails>
            </SectionEachDetailsText> */}
            {/* </SectionEachDetails>
            <SectionEachDetails> */}
            {/* <SectionEachDetailsText>
              <IconPoint color={"#40AB00"} />
              <TextTokeDetails>Marketing and development: 5%</TextTokeDetails>
            </SectionEachDetailsText>
            <SectionEachDetailsText>
              <IconPoint color={"#2D7900"} />
              <TextTokeDetails>Staking rewards: 20%</TextTokeDetails>
            </SectionEachDetailsText> */}
            {/* </SectionEachDetails>
            <SectionEachDetails> */}
            {/* <SectionEachDetailsText>
              <IconPoint color={"#7DA237"} />
              <TextTokeDetails>Uniswap Pool: 70%</TextTokeDetails>
            </SectionEachDetailsText> */}
            {/* </SectionEachDetails> */}
          </SectionChartDetails>
        </SectionChart>
        <SectionToken>
          <SectionImageToken>
            <img
              src={"./assets/images/icons/tokens.png"}
              width={"100%"}
              alt="chart"
            />
          </SectionImageToken>
          <SectionTokenDetails>
            {dataTokenDetails.map((each, index) => {
              return (
                <TextTokenDetails key={index} data={each} index={index + 1} />
              );
            })}
          </SectionTokenDetails>
        </SectionToken>
      </SectionDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  box-sizing: border-box;
  padding: 100px 300px;
  @media (max-width: 1440px) {
    padding: 70px 200px;
  }
  @media (max-width: 1023px) {
    padding: 50px 50px;
  }
  @media (max-width: 430px) {
    padding: 30px 20px;
  }
`;

const SectionDetails = styled(Box)`
  display: flex;
  margin-top: 150px;
  transition: 2s;
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};

  @media (max-width: 1440px) {
    margin-top: 100px;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

const SectionChart = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 130px;

  @media (max-width: 1400px) {
    margin-right: 50px;
  }
  @media (max-width: 1023px) {
    margin-right: 0px;
  }
`;

const SectionImageChart = styled(Box)`
  display: flex;
  width: 300px;

  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const SectionButtonSwitch = styled(Box)`
  display: flex;
  width: 300px;
  height: 45px;
  border-radius: 20px;
  background: #c1ff72;

  /* Drop Shadow */
  box-shadow: 0px 68.53px 54.824px 0px rgba(8, 29, 75, 0.09),
    0px 28.63px 22.904px 0px rgba(8, 29, 75, 0.06),
    0px 15.307px 12.246px 0px rgba(8, 29, 75, 0.05),
    0px 8.581px 6.865px 0px rgba(8, 29, 75, 0.05),
    0px 4.557px 3.646px 0px rgba(8, 29, 75, 0.04),
    0px 1.896px 1.517px 0px rgba(8, 29, 75, 0.03);
  margin-top: 35px;
  padding: 5px;

  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 250px;
    height: 40px;
    margin-top: 25px;
    padding: 4px;
  }
  @media (max-width: 430px) {
    width: 200px;
    height: 35px;
    margin-top: 15px;
    padding: 3px;
  }
`;

const ButtonSwitch = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 15.085px;
  background: ${({ isactive }: any) => (isactive ? "rgba(0,0,0,0)" : "#000")};
  color: ${({ isactive }: any) => (isactive ? "black" : "white")};
  text-align: center;
  font-family: Garet;
  font-size: 14px;
  font-style: normal;
  font-weight: 850;
  letter-spacing: -0.605px;

  cursor: pointer;
  user-select: none;
  transition: all.3s;
`;

const SectionChartDetails = styled(Box)`
  display: grid;
  flex-direction: column;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  @media (max-width: 1023px) {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// const SectionEachDetails = styled(Box)`
//   display: flex;
//   align-items: center;
//   width: 420px;
//   margin-bottom: 30px;
// `;

const SectionEachDetailsText = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
`;

const TextTokeDetails = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const SectionToken = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    margin-top: 50px;
  }
`;

const SectionImageToken = styled(Box)`
  display: flex;
  width: 350px;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    width: 70%;
  }
  animation: aniToken1 3s infinite;
  @keyframes aniToken1 {
    0% {
      filter: drop-shadow(0px 0px 0px #befb71);
    }
    50% {
      filter: drop-shadow(0px 0px 40px #befb71);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #befb71);
    }
  }
`;

const SectionTokenDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 1023px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export default Tokenomics;
