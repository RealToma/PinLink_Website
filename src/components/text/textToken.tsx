import { Box } from "@mui/material";
import styled from "styled-components";

const TextTokenDetails = ({ data, index }: any) => {
  return (
    <StyledComponent>
      <SectionIcon>{index}</SectionIcon>
      <TextToken>{data.text}</TextToken>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #befb71;
  margin-right: 10px;
  color: #0a0a0a;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`;

const TextToken = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

export default TextTokenDetails;
