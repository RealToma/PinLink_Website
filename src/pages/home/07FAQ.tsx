import { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import TextSubject from "../../components/text/textSubject";
import { dataTextFAQ } from "../../data/text";
import CardFAQ from "../../components/card/cardFAQ";

const FAQ = () => {
  const [isClicked, setIsClicked] = useState(-1);

  return (
    <StyledComponent>
      <TextSubject textSubject={"FAQ’s"} />
      <SectionFAQ>
        {dataTextFAQ.map((each, index) => {
          return (
            <CardFAQ
              key={index}
              index={index}
              data={each}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          );
        })}
      </SectionFAQ>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  padding: 100px 300px;
  box-sizing: border-box;
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

const SectionFAQ = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 150px;
  flex-direction: column;
  @media (max-width: 1440px) {
    margin-top: 120px;
  }
  @media (max-width: 1023px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 430px) {
    margin-top: 40px;
  }
`;

const SectionEachFAQ = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  border: 1px solid #77798f;
  background: #202020;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 15px 5px #999;
  }
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TextHead = styled(Box)`
  display: flex;
  color: #c1ff72;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
`;

const SectionIcon = styled(Box)`
  display: flex;
  font-size: 30px;
  color: #a3a3a3;
`;

const SectionContent = styled(Box)`
  display: flex;
  margin-top: 10px;
  color: #babfb2;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  /* line-height: 38px; */
`;
export default FAQ;
