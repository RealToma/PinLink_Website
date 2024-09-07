import { Box } from "@mui/material";
import styled from "styled-components";
import { LogoMain } from "../../components/icons/logo";
import { useState } from "react";

const Enter = ({ setIsEntered }: any) => {
  const [clickedEnter, setClickedEnter] = useState(false);

  return (
    <StyledComponent>
      <SectionLogo>
        <LogoMain />
      </SectionLogo>
      <SectionRing>
        <SectionVideoRing isactive={clickedEnter ? 1 : 0}>
          <img
            src={"./assets/videos/animationRing.gif"}
            width={"100%"}
            alt=""
          />
        </SectionVideoRing>
        <TextEnter
          isactive={clickedEnter ? 1 : 0}
          onClick={() => {
            setClickedEnter(true);
            setTimeout(() => {
              setIsEntered(true);
            }, 800);
          }}
        >
          Enter
        </TextEnter>
      </SectionRing>
      <VideoBackLoop>
        <video autoPlay loop muted>
          <source
            src={"./assets/videos/animationEnterBack.mp4"}
            type="video/mp4"
          />
        </video>
      </VideoBackLoop>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const SectionLogo = styled(Box)`
  display: flex;
  position: fixed;
  top: 45px;
  left: 100px;
  z-index: 100;
`;

const VideoBackLoop = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  /* opacity: 0.6; */
  /* filter: brightness(2); */
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  z-index: -3;
`;

const SectionRing = styled(Box)`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SectionVideoRing = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 2s;
  width: ${({ isactive }: any) => (isactive ? "10000px" : "800px")};
`;

const TextEnter = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #c1ff72;
  text-align: center;
  font-family: Garet;
  font-size: ${({ isactive }: any) => (isactive ? "30px" : "60px")};
  opacity: ${({ isactive }: any) => (isactive ? "0" : "1")};
  font-style: normal;
  font-weight: 850;
  cursor: pointer;
  user-select: none;
  transition: 0.7s;
  &:active {
    font-size: 55px;
  }

  animation: textAnimation01 1000ms ease-in infinite;
  @keyframes textAnimation01 {
    0% {
      text-shadow: 0px 0px 20px #c1ff72;
    }
    50% {
      text-shadow: 0px 0px 20px #c1ff7200;
      /* transform: translate(-50%, -50%) scale(1.1); */
    }
    100% {
      text-shadow: 0px 0px 20px #c1ff72;
    }
  }
`;

export default Enter;
