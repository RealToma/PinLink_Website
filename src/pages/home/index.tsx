import { Box } from "@mui/material";
import styled from "styled-components";
import Hero from "./01Hero";
import About from "./02About";
import KeyFeatures from "./03KeyFeatures";
import UseCases from "./04UseCases";
import Roadmap from "./05Roadmap";
import Tokenomics from "./06Tokenomics";
import FAQ from "./07FAQ";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <StyledComponent>
      <Hero />
      <About />
      <KeyFeatures />
      <UseCases />
      <Roadmap />
      <Tokenomics />
      <FAQ />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export default Home;
