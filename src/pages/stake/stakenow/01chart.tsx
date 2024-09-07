import { Box } from "@mui/material";
import styled from "styled-components";
import { dataChartData, dataChartSelectDate } from "../../../data/chart";
import { useState } from "react";
import Chart from "react-apexcharts";

const SectionChart = () => {
  // const [isSelected, setSelected] = useState(5);
  const [date, setDate] = useState("");
  // const [timeline, setTimeline] = useState("YTD");

  // useEffect(() => {
  //   ApexCharts.exec(
  //     "area-datetime",
  //     "zoomX",
  //     new Date("23 Jan 2012").getTime(),
  //     new Date("27 Feb 2013").getTime()
  //   );
  // }, []);

  const updateChartData = (timeline: any) => {
    setDate(timeline);
    switch (timeline) {
      case "1D":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("26 Feb 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "7D":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("20 Feb 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "1M":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "6M":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Aug 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "1Y":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Feb 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "YTD":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      // case "all":
      //   ApexCharts.exec(
      //     "area-datetime",
      //     "zoomX",
      //     new Date("23 Jan 2012").getTime(),
      //     new Date("27 Feb 2013").getTime()
      //   );
      //   break;
      default:
    }
  };
  return (
    <StyledComponent>
      <SectionPrice>
        <TextPrice>$ 37,237.23</TextPrice>
        <TextPercentage>+0.31%</TextPercentage>
        <TextPriceDay>{date}</TextPriceDay>
      </SectionPrice>
      <SectionSelectDate>
        {dataChartSelectDate.map((each, index) => {
          return (
            <TextSelectDate
              key={index}
              isactive={date === each.name ? 1 : 0}
              onClick={() => {
                // setSelected(index);
                setDate(each.name);
                updateChartData(each.name);
              }}
            >
              {each.name}
            </TextSelectDate>
          );
        })}
      </SectionSelectDate>
      <SectionDisplayChart>
        <Chart
          options={dataChartData.options}
          series={dataChartData?.series}
          // height={300}
          type="area"
        />
      </SectionDisplayChart>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionPrice = styled(Box)`
  display: flex;
  align-items: flex-end;
`;

const TextPrice = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;

  @media (max-width: 1440px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;

const TextPercentage = styled(Box)`
  color: #13c883;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 10px;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const TextPriceDay = styled(Box)`
  color: #77798f;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 15px;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const SectionSelectDate = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const TextSelectDate = styled(Box)`
  display: flex;
  color: ${({ isactive }: any) => (isactive ? "#C1FF72" : "#77798f")};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 30px;
  transition: all.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${({ isactive }: any) => (isactive ? "#C1FF72" : "white")};
  }

  @media (max-width: 1440px) {
    font-size: 15px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    margin-right: 10px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const SectionDisplayChart = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  height: fit-content;
  /* justify-content: center; */
  /* align-items: center; */
  box-sizing: border-box;
  > div {
    width: 100%;
  }
`;

export default SectionChart;
