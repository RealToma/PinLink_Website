import { Box } from "@mui/material";
import styled from "styled-components";

export const LogoMain = () => {
  return (
    <StyledComponent
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <SectionLogo>
        <img src={"./assets/images/icons/logo.png"} width={"100%"} alt="logo" />
      </SectionLogo>
      <TextLogo>PinLink</TextLogo>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const SectionLogo = styled(Box)`
  display: flex;
  width: 50px;
  /* width: 250px; */
  margin-right: 10px;
  @media (max-width: 1440px) {
    width: 45px;
  }
  @media (max-width: 768px) {
    width: 35px;
  }
  /* @media (max-width: 1440px) {
    width: 150px;
  } */
`;

const TextLogo = styled(Box)`
  display: flex;
  color: white;
  font-family: "Tachyon";
  /* font-family: Garet; */
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
