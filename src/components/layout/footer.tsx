import { Box } from "@mui/material";
import styled from "styled-components";
import { LogoMain } from "../icons/logo";
import { dataContactLink } from "../../data/links";

const Footer = () => {
  return (
    <StyledComponent>
      <SectionGroupLink>
        {dataContactLink.map((each, index) => {
          return (
            <a
              href={each.link}
              key={index}
              style={{
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecionIcon key={index}>
                <ImgIcon>{each.icon}</ImgIcon>
                <TextIcon>{each.name}</TextIcon>
              </SecionIcon>
            </a>
          );
        })}
      </SectionGroupLink>
      <SectionLogo>
        <LogoMain />
      </SectionLogo>
      <TextReserved>© 2024 PinLink • All Rights Reserved</TextReserved>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(13, 13, 13) 0%,
    rgb(0, 0, 0, 0) 100%
  );
  z-index: 2;
  @media (max-width: 1600px) {
    padding: 40px;
  }
  @media (max-width: 1023px) {
    padding: 70px 40px;
  }
  @media (max-width: 768px) {
    padding: 70px 30px;
  }
  @media (max-width: 430px) {
    padding: 70px 20px;
  }
`;

const SectionGroupLink = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 60px;

  @media (max-width: 1440px) {
    grid-column-gap: 50px;
  }
  @media (max-width: 768px) {
    grid-column-gap: 40px;
  }
  @media (max-width: 500px) {
    grid-column-gap: 20px;
  }
`;

const SecionIcon = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: white;
  transition: 0.3s;
  &:hover {
    color: #c1ff72;
  }
`;

const ImgIcon = styled(Box)`
  font-size: 50px;

  @media (max-width: 1440px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const TextIcon = styled(Box)`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const SectionLogo = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const TextReserved = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  color: #fff;
  font-feature-settings: "salt" on;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.32px;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export default Footer;
