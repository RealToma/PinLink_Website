import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <StyledComponent>
      {/* <BackGradient>
        <img
          src={"./assets/images/backgrounds/backBlur01.png"}
          width={"100%"}
          alt="back"
        />
      </BackGradient> */}

      <InsideComponent>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </InsideComponent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const InsideComponent = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  animation: backAnimation1 0.5s ease-out;
  @keyframes backAnimation1 {
    0% {
      opacity: 0;
    }
    /* 50% {
      transform: scale(2);
    } */
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled(Box)`
  display: flex;
  width: 100%;
  z-index: 2;
`;

const BackGradient = styled(Box)`
  display: flex;
  width: 1200px;
  position: absolute;
  top: -600px;
  left: -600px;
  z-index: 3;
`;

// const BackLogoImg = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   z-index: 1;
// `;

export default Layout;
