import { Box } from "@mui/material";
import styled from "styled-components";
import { LogoMain } from "../icons/logo";
import { dataContactLink, dataMenuLink } from "../../data/links";
// import { MdMenu } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Slide from "@mui/material/Slide";
import { NotificationManager } from "react-notifications";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleOpenDapp = () => {
    NotificationManager.info("Coming soon.", "", 5000);
  };

  return (
    <StyledComponent>
      <LogoMain />
      <SectionLink count={dataMenuLink.length}>
        {dataMenuLink.map((each, index) => {
          return (
            <a
              href={each?.linkScroll}
              style={{ textDecoration: " none" }}
              key={index}
            >
              <TextLink
                islast={index === dataMenuLink.length - 1 ? 1 : 0}
                onClick={() => {
                  // scroller.scrollTo(each.name, {
                  //   duration: 800,
                  //   smooth: true,
                  //   offset: -100, // Adjust offset as needed
                  // });
                }}
              >
                {each.name}
              </TextLink>
            </a>
          );
        })}
      </SectionLink>
      <SectionButtonGroup>
        <ButtonDapp
          onClick={() => {
            handleOpenDapp();
          }}
        >
          dApp
        </ButtonDapp>
        <ButtonStake
          onClick={() => {
            handleOpenDapp();
          }}
        >
          Stake
        </ButtonStake>
      </SectionButtonGroup>
      <ButtonMobile
        onClick={() => {
          setIsMobile(true);
        }}
      >
        <HiMenu />
      </ButtonMobile>
      {isMobile ? (
        <Slide in={isMobile} direction={"right"}>
          <MenuMobile>
            <LogoMain />
            <SectionMobileLink>
              <SectionGroupMobileLink>
                {dataMenuLink.map((each, index) => {
                  return (
                    <a
                      href={each?.linkScroll}
                      style={{ textDecoration: " none" }}
                      key={index}
                      onClick={() => {
                        setIsMobile(false);
                      }}
                    >
                      <TextMobileLink
                        islast={index === dataMenuLink.length - 1 ? 1 : 0}
                      >
                        {each.name}
                      </TextMobileLink>
                    </a>
                  );
                })}
                <SectionMobileButtonGroup>
                  <ButtonDapp
                    onClick={() => {
                      handleOpenDapp();
                    }}
                  >
                    dApp
                  </ButtonDapp>
                  <ButtonStake
                    onClick={() => {
                      handleOpenDapp();
                    }}
                  >
                    Stake
                  </ButtonStake>
                </SectionMobileButtonGroup>
              </SectionGroupMobileLink>
              <SectionMobileFooter>
                <SectionSocialFooter>
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
                </SectionSocialFooter>
                <TextMobileReserved>
                  © 2024 PinLink • All Rights Reserved
                </TextMobileReserved>
              </SectionMobileFooter>
            </SectionMobileLink>
            <ButtonClose onClick={() => setIsMobile(false)}>
              <CgClose />
            </ButtonClose>
          </MenuMobile>
        </Slide>
      ) : (
        <></>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  z-index: 7;
  background-color: #000;

  @media (max-width: 1600px) {
    padding: 30px 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 430px) {
    padding: 20px;
  }
`;

const SectionLink = styled(Box)`
  display: flex;
  width: fit-content;
  height: 60px;
  padding: 0px 35px;
  box-sizing: border-box;
  align-items: center;
  background-color: #131313;
  border-radius: 50px;
  border: 1px solid #3c3f43;

  @media (max-width: 1600px) {
    height: 50px;
    padding: 0px 30px;
    border-radius: 40px;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

const TextLink = styled(Box)`
  color: #fff;
  text-align: center;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 850;
  margin-right: ${({ islast }: any) => (islast ? "none" : "35px")};

  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #c1ff72;
  }

  @media (max-width: 1600px) {
    font-size: 16px;
    margin-right: ${({ islast }: any) => (islast ? "none" : "30px")};
  }
  @media (max-width: 1366px) {
    font-size: 12px;
    margin-right: ${({ islast }: any) => (islast ? "none" : "25px")};
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    font-weight: 300;
    margin-right: ${({ islast }: any) => (islast ? "none" : "15px")};
  }
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SectionMobileButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonDapp = styled(Box)`
  display: flex;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #c1ff72;
  border: 1px solid #c1ff72;
  border-radius: 8px;
  color: #000;
  text-align: center;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 850;
  margin-right: 15px;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    border: 1px solid white;
    background-color: white;
    color: #c1ff72;
  }

  @media (max-width: 1600px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  display: flex;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 850;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 1600px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;

const ButtonMobile = styled(Box)`
  display: none;

  /* width: 30px; */
  /* height: 30px; */
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  /* border-radius: 6px; */
  font-size: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1023px) {
    display: flex;
  }
  @media (max-width: 430px) {
    font-size: 35px;
  }
`;

const MenuMobile = styled(Box)`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background-color: black;
  box-sizing: border-box;
  padding: 30px 40px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 430px) {
    padding: 20px;
  }
`;

const ButtonClose = styled(Box)`
  display: flex;
  position: absolute;
  cursor: pointer;
  user-select: none;
  font-size: 40px;
  color: white;
  right: 30px;
  top: 30px;

  @media (max-width: 430px) {
    font-size: 35px;
    right: 20px;
    top: 20px;
  }
`;

const SectionMobileLink = styled(Box)`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

const TextMobileLink = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  margin-bottom: 30px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #c1ff72;
  }

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const SectionGroupMobileLink = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionMobileFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SectionSocialFooter = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 50px;
  @media (max-width: 768px) {
    grid-column-gap: 30px;
  }
  @media (max-width: 430px) {
    grid-column-gap: 10px;
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
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 430px) {
    font-size: 25px;
  }
`;

const TextIcon = styled(Box)`
  display: flex;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const TextMobileReserved = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  color: #fff;
  font-feature-settings: "salt" on;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 430px) {
    font-size: 11px;
    font-weight: 300;
  }
`;

export default Header;
