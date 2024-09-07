import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaLink } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export const dataContactLink = [
  {
    name: "Telegram",
    link: "https://telegram",
    icon: <FaTelegramPlane />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pinlinkai",
    icon: <FaXTwitter />,
  },
  {
    name: "Web Link",
    link: "https://pinlink.io",
    icon: <FaLink />,
  },
  {
    name: "Gitbook",
    link: "https://pinlink.gitbook.io/pinlink",
    icon: <SiGitbook />,
  },
];

export const dataMenuLink = [
  {
    name: "Home",
    link: "/",
    isDisable: false,
    typeDapp: true,
  },
  {
    name: "Marketplace",
    link: "/marketplace",
    isDisable: false,
    typeDapp: true,
  },
  {
    name: "TokenizeRWA ",
    link: "/tokenize ",
    isDisable: true,
    typeDapp: true,
  },
  {
    name: "DePinAI",
    link: "/depinai",
    isDisable: true,
    typeDapp: true,
  },
  {
    name: "Stake $PIN",
    link: "/stake",
    isDisable: false,
    typeDapp: true,
  },
  {
    name: "Mint",
    link: "/mint",
    isDisable: false,
    typeDapp: true,
  },
  // {
  //   name: "Dashboard",
  //   link: "/dashboard",
  //   isDisable: false,
  // },
  {
    name: "About",
    link: "https://pinlink.io/",
    isDisable: false,
    typeDapp: false,
  },
];
