import { Box } from "@mui/material";
import styled from "styled-components";

export const SectionEach = ({ children, backColor }: any) => {
  return (
    <StyledComponent background={backColor ? backColor : "none"}>
      {children}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  background-color: ${({ background }: any) =>
    background ? background : "none"};
  flex-direction: column;
  padding: 0px 50px 0px 300px;
  box-sizing: border-box;

  @media (max-width: 1600px) {
    padding: 0px 40px 0px 280px;
  }
  @media (max-width: 1024px) {
    padding: 0px 30px;
  }
  @media (max-width: 430px) {
    padding: 0px 20px;
  }
`;
