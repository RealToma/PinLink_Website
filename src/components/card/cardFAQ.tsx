import { Box } from "@mui/material";
import styled from "styled-components";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { useScroll } from "../../utils/hooks.ui";
import Collapse from "@mui/material/Collapse";

const CardFAQ = ({ data, index, isClicked, setIsClicked }: any) => {
  const { visible: visibleCard10, element: cardRef10 } = useScroll();

  return (
    <SectionEachFAQ
      key={index}
      onClick={() => {
        if (isClicked === index) {
          setIsClicked(-1);
          return;
        }
        setIsClicked(index);
      }}
      ref={cardRef10}
      isvisible={visibleCard10 ? 1 : 0}
    >
      <SectionHead>
        <TextHead>{data.textHead}</TextHead>
        <SectionIcon>
          {isClicked === index ? (
            <LuMinusCircle></LuMinusCircle>
          ) : (
            <LuPlusCircle></LuPlusCircle>
          )}
        </SectionIcon>
      </SectionHead>
      <Collapse in={isClicked === index ? true : false}>
        <SectionContent>{data.textContent}</SectionContent>
      </Collapse>
    </SectionEachFAQ>
  );
};

const SectionEachFAQ = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  border: 1px solid #77798f;
  background: #202020;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
  cursor: pointer;
  user-select: none;

  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 15px 5px #999;
  }
  opacity: ${(p: any) => (p.isvisible ? "1" : "0")};

  @media (max-width: 1440px) {
    padding: 15px 25px;
    margin-bottom: 40px;
  }
  @media (max-width: 1024px) {
    padding: 12px 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 0px 0px 10px 3px #999;
    }
  }
  @media (max-width: 430px) {
    padding: 8px 12px;
    &:hover {
      box-shadow: 0px 0px 5px 2px #999;
    }
  }
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TextHead = styled(Box)`
  display: flex;
  color: #c1ff72;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const SectionIcon = styled(Box)`
  display: flex;
  font-size: 30px;
  color: #a3a3a3;
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  margin-top: 10px;
  color: #babfb2;
  font-family: Garet;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 15px;
  }
  @media (max-width: 430px) {
    margin-top: 5px;
    font-size: 12px;
  }
  /* line-height: 38px; */
`;

export default CardFAQ;
