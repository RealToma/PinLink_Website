import { Box } from "@mui/material";
import styled from "styled-components";

const InputMintDetails = ({ data }: any) => {
  return (
    <SectionEachDetails>
      <TextEachDetails>{data.name}</TextEachDetails>
      <SectionInputEachDetails>
        <InputDetails
          component="input"
          placeholder={"Input " + data.name + " details."}
        ></InputDetails>
      </SectionInputEachDetails>
    </SectionEachDetails>
  );
};

const SectionEachDetails = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1366px) {
    margin-bottom: 15px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextEachDetails = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1366px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

const SectionInputEachDetails = styled(Box)`
  display: flex;
  padding: 0px 20px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 3px solid #77798f;
  background: rgba(32, 32, 32, 0.3);
  box-shadow: 25px 35px 65px 0px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  width: 500px;
  height: 40px;
  @media (max-width: 1600px) {
    width: 450px;
  }
  @media (max-width: 1366px) {
    width: 400px;
    height: 35px;
    padding: 0px 15px;
    border: 2px solid #77798f;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 3px;
    border-radius: 12px;
    padding: 0px 10px;
    border: 1px solid #77798f;
  }
  @media (max-width: 430px) {
    border-radius: 8px;
    padding: 0px 7px;
  }
`;

const InputDetails = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-family: Garet;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1366px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

export default InputMintDetails;
