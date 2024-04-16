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
    isPage: false,
    linkScroll: "#Home",
  },
  {
    name: "About",
    link: "/",
    isDisable: false,
    isPage: false,
    linkScroll: "#About",
  },
  {
    name: "Key Features",
    link: "/",
    isDisable: false,
    isPage: false,
    linkScroll: "#KeyFeatures",
  },
  {
    name: "Use Cases",
    link: "/",
    isDisable: false,
    isPage: false,
    linkScroll: "#UseCases",
  },
  {
    name: "Roadmap",
    link: "/",
    isDisable: false,
    isPage: false,
    linkScroll: "#Roadmap",
  },
  {
    name: "Tokenomics",
    link: "/",
    isDisable: false,
    isPage: false,
    linkScroll: "#Tokenomics",
  },
];
