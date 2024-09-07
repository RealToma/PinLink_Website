import { Box } from "@mui/material";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { SectionEach } from "../../components/layout/section";
import { dataNFTs } from "../../data/nfts";
import CardNFT from "../../components/cards/cardNFT";
import CardNFTSmall from "../../components/cards/cardNFTsmall";
import CardNFTCheck from "../../components/cards/cardNFTCheck";
import { useScroll } from "../../utils/hooks.ui";
import Marquee from "react-fast-marquee";

const Home = () => {
  const { visible: visibleCard1, element: cardRef1 } = useScroll();
  const { visible: visibleCard2, element: cardRef2 } = useScroll();
  const { visible: visibleCard3, element: cardRef3 } = useScroll();
  const { visible: visibleCard4, element: cardRef4 } = useScroll();

  return (
    <StyledComponent>
      <BackRightLogo>
        <img
          src={"/assets/images/backgrounds/backEffect/logoGreen01.png"}
          width={"100%"}
          alt=""
        />
      </BackRightLogo>
      <SectionEach backColor={"#000"}>
        <SectionTopText>
          <TextTopHead>Join the RWA-Tokenized DePIN Revolution</TextTopHead>
          <TextTopDescription>
            Tokenize and Trade your Depin Assets with Ease.
          </TextTopDescription>
          <BackRightLogoMobile>
            <img
              src={"/assets/images/backgrounds/backEffect/logoGreen01.png"}
              width={"100%"}
              alt=""
            />
          </BackRightLogoMobile>
        </SectionTopText>
        <SectionTopDetails>
          <TextTopDetailsSubject>
            Welcome to the PinLink DePIN Assets Marketplace
          </TextTopDetailsSubject>
          <TextTopDetailsContent>
            At PinLink, we're dedicated to revolutionizing the way you interact
            with decentralized infrastructure networks (DePIN). Our DePIN Assets
            Marketplace is your gateway to a world of opportunity, where you can
            tokenize, trade, and invest in DePIN assets like never before.
          </TextTopDetailsContent>
        </SectionTopDetails>
      </SectionEach>
      <SectionEach backColor={"#000"}>
        <BackLeftBlue01>
          <img
            src={"./assets/images/backgrounds/backgradient01.png"}
            width={"100%"}
            alt=""
          />
        </BackLeftBlue01>
        <SectionTrendingHead>
          <TextSubject>Trending DePin Assets</TextSubject>
          <ButtonMore>
            <TextMore>More</TextMore>
            <IconMore>
              <BsArrowRight />
            </IconMore>
          </ButtonMore>
        </SectionTrendingHead>
        <SectionNFTs>
          {dataNFTs.slice(0, 10).map((each, index) => {
            return <CardNFT key={index} data={each} />;
          })}
        </SectionNFTs>
      </SectionEach>
      <SectionEach backColor={"#000"}>
        <SectionExplore>
          <BackNFTGridLeft>
            <ImgBackNFTGrid>
              <img
                src={"./assets/images/backgrounds/nftBackGrid.png"}
                width={"100%"}
                alt="backGrid"
              />
            </ImgBackNFTGrid>
            <CardNFTRotate01 isvisible={visibleCard1 ? 1 : 0} ref={cardRef1}>
              <CardNFTSmall data={dataNFTs[6]} />
            </CardNFTRotate01>
            <CardNFTRotate02 isvisible={visibleCard2 ? 1 : 0} ref={cardRef2}>
              <CardNFTSmall data={dataNFTs[7]} />
            </CardNFTRotate02>
          </BackNFTGridLeft>
          <SectionInsideExplore>
            <TextSubject>Explore a Diverse Range of Assets</TextSubject>
            <ImgUnderline>
              <img
                src={"./assets/images/backgrounds/underText01.png"}
                width={"100%"}
                alt="undreline"
              />
            </ImgUnderline>
            <TextTopDetailsContent>
              From GPUs and nodes to storage and computing power, our
              marketplace offers a diverse array of DePIN assets for you to
              explore. Whether you're a developer looking to harness the power
              of decentralized infrastructure or an investor seeking new
              opportunities, you'll find everything you need right here.
            </TextTopDetailsContent>
            <ButtonExplore01>Explore Now</ButtonExplore01>
          </SectionInsideExplore>
        </SectionExplore>
      </SectionEach>

      <SectionEach backColor={"#000"}>
        <SectionTokenize>
          <BackNFTGridRight>
            <ImgBackNFTGrid>
              <img
                src={"./assets/images/backgrounds/nftBackGrid.png"}
                width={"100%"}
                alt="backGrid"
              />
            </ImgBackNFTGrid>
            <CardNFTRotate01 isvisible={visibleCard3 ? 1 : 0} ref={cardRef3}>
              <CardNFTSmall data={dataNFTs[6]} />
            </CardNFTRotate01>
            <CardNFTRotate02 isvisible={visibleCard4 ? 1 : 0} ref={cardRef4}>
              <CardNFTSmall data={dataNFTs[7]} />
            </CardNFTRotate02>
          </BackNFTGridRight>
          <SectionInsideTokenize>
            <TextSubject>Tokenize your DePin Assets</TextSubject>
            <ImgUnderline>
              <img
                src={"./assets/images/backgrounds/underText01.png"}
                width={"100%"}
                alt="undreline"
              />
            </ImgUnderline>
            <TextTopDetailsContent>
              Tokenize Your Assets with PinLink, tokenizing your DePIN assets
              has never been easier. Our user-friendly platform allows you to
              tokenize your assets with just a few clicks, unlocking new
              possibilities for liquidity and investment. Whether you're looking
              to fractionalize ownership or trade your assets on the open
              market, PinLink makes it simple and hassle-free.
            </TextTopDetailsContent>
            <ButtonExploreGroup>
              <ButtonExplore01>Explore Now</ButtonExplore01>
              <ButtonExplore02>Explore Now</ButtonExplore02>
            </ButtonExploreGroup>
          </SectionInsideTokenize>
        </SectionTokenize>
      </SectionEach>

      <SectionEach backColor={"#000"}>
        {/* <BackLeftBlue02>
          <img
            src={"./assets/images/backgrounds/backgradient01.png"}
            width={"100%"}
            alt=""
          />
        </BackLeftBlue02> */}
        <SectionTokenize>
          <SectionInsideDiscover>
            <SectionDiscoverTop>
              <TextSubject width={"70%"}>
                Discover Top-Selling Assets
              </TextSubject>
              <ButtonMore>
                <TextMore>More</TextMore>
                <IconMore>
                  <BsArrowRight />
                </IconMore>
              </ButtonMore>
            </SectionDiscoverTop>

            <TextTopDetailsContent>
              Stay ahead of the curve by exploring our curated selection of
              top-selling DePIN assets. From high-performance GPUs to
              cutting-edge storage solutions, our marketplace features the
              latest and greatest assets from across the DePIN ecosystem. With
              real-time data and insights, you'll always be in the know about
              the hottest assets on the market.
            </TextTopDetailsContent>
          </SectionInsideDiscover>
        </SectionTokenize>
      </SectionEach>

      <SectionMarquee>
        {/* <BackLeftBlue03>
          <img
            src={"./assets/images/backgrounds/backGradient02.png"}
            width={"100%"}
            alt=""
          />
        </BackLeftBlue03> */}
        <SectionCheckMore>
          <CustomMarquee gradient={true} speed={"50"}>
            {dataNFTs.map((each, index) => {
              return <CardNFTCheck data={each} key={index} />;
            })}
          </CustomMarquee>
        </SectionCheckMore>
      </SectionMarquee>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionTopText = styled(Box)`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin-top: 50px;
  z-index: 8;
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
    align-items: center;
  }
`;

const TextTopHead = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 80px;
  font-style: normal;
  font-weight: 850;
  line-height: 100px; /* 107.031% */

  @media (max-width: 1600px) {
    font-size: 60px;
    line-height: 80px; /* 107.031% */
  }
  @media (max-width: 1366px) {
    font-size: 50px;
    line-height: 60px; /* 107.031% */
  }
  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 50px; /* 107.031% */
  }
  @media (max-width: 767px) {
    font-size: 35px;
    text-align: center;
  }
  @media (max-width: 430px) {
    font-size: 30px;
    line-height: 40px; /* 107.031% */
  }
`;

const TextTopDescription = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 60px; /* 137.5% */

  margin-top: 15px;

  @media (max-width: 1600px) {
    font-size: 25px;
    line-height: 40px; /* 107.031% */
  }
  @media (max-width: 1366px) {
    font-size: 20px;
    line-height: 30px; /* 107.031% */
  }
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 25px; /* 107.031% */
    margin-top: 10px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (max-width: 430px) {
    font-size: 15px;
    line-height: 20px; /* 107.031% */
  }
`;

const SectionTopDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: #191919;

  /* Drop Shadow */
  box-shadow: 0px 18px 86.9px 0px rgba(0, 0, 0, 0.62);
  padding: 30px 50px;
  /* width: 100%;
  background-image: url("./assets/images/backgrounds/homeWelcomeRect.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 30px 100px; */
  box-sizing: border-box;
  margin-top: 230px;

  @media (max-width: 1600px) {
    padding: 30px 40px;
    margin-top: 200px;
  }
  @media (max-width: 1366px) {
    padding: 30px;
    margin-top: 180px;
  }
  @media (max-width: 1024px) {
    padding: 20px;
    margin-top: 100px;
  }
  @media (max-width: 767px) {
    padding: 15px;
    margin-top: 300px;
  }
  @media (max-width: 430px) {
    padding: 15px;
    margin-top: 320px;
  }
`;

const TextTopDetailsSubject = styled(Box)`
  color: #c1ff72;
  font-family: Garet;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 43px; /* 119.444% */

  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1366px) {
    font-size: 27px;
  }
  @media (max-width: 1023px) {
    font-size: 23px;
    line-height: 40px; /* 119.444% */
  }
  @media (max-width: 430px) {
    font-size: 20px;
    line-height: 30px; /* 119.444% */
  }
`;

const TextTopDetailsContent = styled(Box)`
  margin-top: 20px;
  color: #fff;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px; /* 119.444% */

  @media (max-width: 1600px) {
    font-size: 23px;
    margin-top: 18px;
  }
  @media (max-width: 1366px) {
    font-size: 20px;
    margin-top: 16px;
    line-height: 35px; /* 119.444% */
  }
  @media (max-width: 1023px) {
    font-size: 18px;
    margin-top: 15px;
    line-height: 30px; /* 119.444% */
  }
  @media (max-width: 430px) {
    font-size: 15px;
    line-height: 25px; /* 119.444% */
  }
`;

const SectionTrendingHead = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  z-index: 4;
  @media (max-width: 1600px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  font-family: Garet;
  font-size: 60px;
  font-style: normal;
  font-weight: 850;
  line-height: 90px; /* 90% */

  @media (max-width: 1600px) {
    font-size: 50px;
    line-height: 70px; /* 107.031% */
  }
  @media (max-width: 1366px) {
    font-size: 40px;
    line-height: 60px; /* 107.031% */
  }
  @media (max-width: 1023px) {
    font-size: 35px;
    line-height: 50px; /* 107.031% */
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px; /* 107.031% */
  }
  @media (max-width: 430px) {
    font-size: 25px;
    line-height: 30px; /* 107.031% */
  }
`;

const ButtonMore = styled(Box)`
  display: flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 3px solid #c1ff72;
  color: #fff;

  cursor: pointer;
  user-select: none;

  transition: all.3s;
  &:hover {
    color: black;
    background-color: #c1ff72;
  }

  @media (max-width: 1366px) {
    width: 110px;
    min-width: 110px;
    height: 35px;
  }
  @media (max-width: 768px) {
    border: 2px solid #c1ff72;
    width: 100px;
    min-width: 100px;
    height: 30px;
  }
  @media (max-width: 430px) {
    width: 90px;
    min-width: 90px;
    height: 25px;
  }
`;

const TextMore = styled(Box)`
  display: flex;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1366px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const IconMore = styled(Box)`
  display: flex;
  font-size: 25px;
  margin-left: 12px;

  @media (max-width: 1366px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
    margin-left: 8px;
  }
`;

const ButtonExplore01 = styled(Box)`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 3px solid #c1ff72;
  color: black;
  background-color: #c1ff72;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;

  margin-top: 30px;
  margin-right: 30px;
  cursor: pointer;
  user-select: none;

  transition: all.3s;
  &:hover {
    color: white;
    background-color: black;
  }

  @media (max-width: 1366px) {
    width: 140px;
    height: 35px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
    font-size: 16px;
    border: 2px solid #c1ff72;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

const ButtonExplore02 = styled(Box)`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 3px solid #c1ff72;
  color: white;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 90px; /* 281.25% */

  margin-top: 30px;
  cursor: pointer;
  user-select: none;

  transition: all.3s;
  &:hover {
    color: black;
    background-color: #c1ff72;
  }

  @media (max-width: 1366px) {
    width: 140px;
    height: 35px;
    font-size: 18px;
    margin-top: 25px;
    margin-right: 25px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
    font-size: 16px;
    border: 2px solid #c1ff72;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

const ButtonExploreGroup = styled(Box)`
  display: flex;
  align-items: center;
`;

const BackRightLogo = styled(Box)`
  display: flex;
  position: absolute;
  right: -300px;
  top: -400px;
  width: 1500px;
  z-index: 4;

  @media (max-width: 1600px) {
    width: 1200px;
    right: -300px;
    top: -300px;
  }
  @media (max-width: 1366px) {
    width: 1000px;
    right: -250px;
    top: -200px;
  }
  @media (max-width: 1023px) {
    width: 700px;
    right: -150px;
    top: -120px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const BackRightLogoMobile = styled(Box)`
  display: none;
  position: absolute;
  left: 50%;
  width: 800px;
  transform: translateX(-50%);
  top: -150px;
  @media (max-width: 767px) {
    display: flex;
  }
  @media (max-width: 547px) {
    top: -100px;
  }
`;

const BackLeftBlue01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: -300px;
  width: 1200px;
  z-index: 1;

  /* animation: backAnimation1 2s ease-in infinite;
  @keyframes backAnimation1 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  } */
`;

// const BackLeftBlue02 = styled(Box)`
//   display: flex;
//   position: absolute;
//   left: 0px;
//   top: -1200px;
//   width: 1200px;
//   z-index: 5;
// `;

// const BackLeftBlue03 = styled(Box)`
//   display: flex;
//   position: absolute;
//   right: -500px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 1200px;
//   z-index: 1;
// `;

const SectionNFTs = styled(Box)`
  display: grid;
  margin-top: 50px;
  margin-bottom: 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  z-index: 4;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 40px;
    margin-bottom: 50px;
  }
  @media (max-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 40px;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

const SectionExplore = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-end;
  padding-top: 70px;
  padding-bottom: 150px;

  @media (max-width: 1366px) {
    padding-top: 30px;
    padding-bottom: 100px;
  }
  @media (max-width: 700px) {
    padding-top: 30px;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 0px;
  }
`;

const SectionTokenize = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  padding-bottom: 100px;
  z-index: 2;

  @media (max-width: 1366px) {
    padding-top: 30px;
    padding-bottom: 50px;
  }
  @media (max-width: 700px) {
    padding-top: 30px;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 0px;
  }
`;

const SectionInsideExplore = styled(Box)`
  display: flex;
  width: 50%;
  flex-direction: column;
  z-index: 4;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const SectionInsideTokenize = styled(Box)`
  display: flex;
  width: 50%;
  flex-direction: column;
  z-index: 4;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

// const TextSubject01 = styled(Box)`
//   color: #fff;
//   font-family: Garet;
//   font-size: 100px;
//   font-style: normal;
//   font-weight: 850;
//   line-height: 90px; /* 90% */
// `;

const ImgUnderline = styled(Box)`
  display: flex;
  width: 300px;
  margin-left: 120px;
  @media (max-width: 1600px) {
    width: 250px;
  }

  @media (max-width: 1366px) {
    width: 200px;
    margin-left: 50px;
  }
`;

// const TextContent01 = styled(Box)`
//   color: #fff;
//   font-family: Inter;
//   font-size: 30px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: 40px; /* 119.444% */
// `;

const BackNFTGridLeft = styled(Box)`
  display: flex;
  position: absolute;
  width: 800px;
  aspect-ratio: 1;
  top: 50px;
  left: 0px;
  z-index: 2;
  @media (max-width: 1600px) {
    width: 700px;
    top: 0px;
    left: -50px;
  }

  @media (max-width: 1366px) {
    width: 600px;
    top: 0px;
    left: -80px;
  }
  @media (max-width: 1023px) {
    width: 500px;
    top: 0px;
    left: -100px;
  }
  @media (max-width: 700px) {
    position: relative;
    left: 0px;
  }
`;

const BackNFTGridRight = styled(Box)`
  display: flex;
  position: absolute;
  width: 800px;
  aspect-ratio: 1;
  top: -150px;
  right: 0px;
  z-index: -1;
  @media (max-width: 1600px) {
    width: 700px;
    top: 0px;
    right: -50px;
  }

  @media (max-width: 1366px) {
    width: 600px;
    top: 0px;
    right: -80px;
  }
  @media (max-width: 1023px) {
    width: 500px;
    top: 0px;
    right: -100px;
  }
  @media (max-width: 700px) {
    position: relative;
    right: 0px;
  }
`;

const ImgBackNFTGrid = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 700px) {
    transform: translate(-50%, -50%);
  }
`;

const CardNFTRotate01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 30%;
  top: 50%;
  width: 250px;
  transform: ${(p: any) =>
    p.isvisible
      ? "rotate(-17deg) translateY(-50%)"
      : "rotate(0deg) translateY(-50%)"};
  transition: 300ms;

  @media (max-width: 1366px) {
    width: 200px;
  }

  @media (max-width: 1023px) {
    width: 150px;
  }
  @media (max-width: 700px) {
    /* left: 50%; */
  }
  @media (max-width: 430px) {
    /* left: 43%; */
  }
`;

const CardNFTRotate02 = styled(Box)`
  display: flex;
  position: absolute;
  left: 35%;
  top: 50%;
  width: 250px;
  transform: ${(p: any) =>
    p.isvisible
      ? "rotate(7deg) translateY(-50%)"
      : "rotate(0deg) translateY(-50%)"};
  transition: 300ms;
  @media (max-width: 1366px) {
    width: 200px;
  }
  @media (max-width: 1023px) {
    width: 150px;
  }

  @media (max-width: 700px) {
    /* left: 55%; */
  }
  @media (max-width: 430px) {
    /* left: 48%; */
  }
`;

const SectionInsideDiscover = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionDiscoverTop = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SectionCheckMore = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const SectionMarquee = styled(Box)`
  display: flex;
  position: relative;
  background-color: black;
  flex-direction: column;
  padding: 0px 0px 0px 300px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1023px) {
    padding: 0px;
  }
`;

const CustomMarquee = styled(Marquee)`
  height: 300px;
  overflow: hidden !important;
  .rfm-overlay {
    --gradient-color: black !important;
    --gradient-width: 100px !important;
  }

  .rfm-overlay::after {
    display: none !important;
  }

  @media (max-width: 768px) {
    height: 250px;
    .rfm-overlay {
      --gradient-width: 50px !important;
    }
  }

  @media (max-width: 430px) {
    height: 200px;
    .rfm-overlay {
      --gradient-width: 30px !important;
    }
  }
`;

export default Home;
