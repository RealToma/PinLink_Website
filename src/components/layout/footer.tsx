import { Box } from "@mui/material";
import styled from "styled-components";
import { LogoMain } from "../icons/logo";
import { dataContactLink } from "../../data/links";

const Footer = () => {
  return (
    <StyledComponent>
      <LogoMain />
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
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 50px 50px;
  @media (max-width: 1600px) {
    padding: 40px 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 430px) {
    padding: 20px;
  }

  z-index: 2;
`;

const SectionGroupLink = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const SecionIcon = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  user-select: none;
  color: white;
  transition: 0.3s;
  &:hover {
    color: #c1ff72;
  }

  @media (max-width: 1366px) {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    margin-left: 15px;
  }
  @media (max-width: 430px) {
    margin-left: 10px;
  }
`;

const ImgIcon = styled(Box)`
  font-size: 40px;
  @media (max-width: 1366px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const TextIcon = styled(Box)`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 1366px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

export default Footer;
