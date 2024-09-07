import { Box } from "@mui/material";
import styled from "styled-components";

const CardStats = ({ children }: any) => {
  return <StyledComponent>{children}</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;

  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 3px solid #77798f;
  background: #202020;
  /* cursor: pointer; */
  /* user-select: none; */
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.62);
  z-index: 100;
  transition: all.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.62);
  }
  /* transition: 0.3s;
  &:hover {
    > div > img {
      transform: scale(1.2);
    }
    box-shadow: 0px 0px 15px 3px #c1ff72;
  } */

  @media (max-width: 1600px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    border: 2px solid #77798f;
    padding: 15px;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export default CardStats;
