import { Box } from "@mui/material";
import styled from "styled-components";
import { dataMenuLink } from "../../data/links";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

const Menubar = () => {
  // const [flagClicked, setFlagClicked] = useState(0);
  const getPathName = localStorage.getItem("pathName");
  const pathName =
    getPathName === undefined || getPathName === null || getPathName === ""
      ? "Home"
      : getPathName;
  const navigate = useNavigate();

  return (
    <StyledComponent>
      <SectionInside>
        <SectionMenu>
          {dataMenuLink.map((each, index) => {
            return (
              <SectionEachMenu
                key={index}
                onClick={() => {
                  if (each.isDisable === true) {
                    return NotificationManager.info("Coming soon.", "", 5000);
                  }
                  if (each.typeDapp === false) {
                    window.open("https://Pinlink.io");
                    return;
                  }
                  localStorage.setItem("pathName", each.name);
                  // setFlagClicked(index);

                  navigate(each.link);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                active={pathName === each.name ? 1 : 0}
              >
                {each.name}
              </SectionEachMenu>
            );
          })}
        </SectionMenu>
        <SectionLogout>Logout</SectionLogout>
      </SectionInside>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  /* position: relative; */
  position: fixed;
  top: 120px;
  left: 50px;
  width: 180px;
  min-width: 180px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 4;
  border-radius: 40px;
  &:before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    padding: 3px;
    border-radius: 40px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SectionInside = styled(Box)`
  display: flex;
  background: rgba(255, 255, 255, 0.06);
  width: 100%;
  height: 100%;
  border-radius: 40px;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 30px;
  padding-right: 20px;
  padding-left: 3px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const SectionMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

const SectionLogout = styled(Box)`
  display: flex;
  color: #fff;
  text-align: center;
  font-family: "Garet";
  font-size: 30px;
  font-style: normal;
  font-weight: 850;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #c1ff72;
  }
`;

const SectionEachMenu = styled(Box)`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  align-items: center;
  color: #fff;
  font-family: Garet;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;

  border-radius: ${({ active }: any) =>
    active ? "0px 100px 100px 0px" : "none"};
  background: ${({ active }: any) =>
    active ? "rgba(255, 255, 255, 0.1)" : "none"};
  box-shadow: ${({ active }: any) =>
    active ? "0px 4px 13.8px 0px rgba(0, 0, 0, 0.25)" : "none"};

  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ active }: any) => (active ? "none" : " #c1ff72")};
  }
`;

export default Menubar;
