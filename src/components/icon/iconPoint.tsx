import { Box } from "@mui/material";
import styled from "styled-components";

const IconPoint = ({ color }: any) => {
  return <StyledComponent style={{ background: color }}></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 15px;
  height: 15px;
  background-color: red;
  margin-right: 10px;
  border-radius: 100%;
`;

export default IconPoint;
