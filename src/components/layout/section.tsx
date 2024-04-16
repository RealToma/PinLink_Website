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
  padding: 0px 100px 0px 400px;
  box-sizing: border-box;
  /* z-index: 3; */
`;
