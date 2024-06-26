// assets
import leftButton from "../../public/icons8-less-than-30.png";
import loaderGif from "../../public/loader.gif";
import rightButton from "../../public/icons8-greater-than-30.png";
import theGraphImg from "../../public/the-graph.png";
import theGraphDiamondImg from "../../public/the-graph-diamond.png";
import externalLinkImg from "../../public/icons8-external-link.svg";
// navbar
import home from "./home";
import menu from "./menu";
import navbar from "./navbar";
import nftHistory from "./nftHistory";

export const screens = {
  default: {
    assets: {
      externalLinkImg,
      leftButton,
      loaderGif,
      rightButton,
      theGraphDiamondImg,
      theGraphImg,
    },
  },
  home,
  menu,
  navbar,
  nftHistory,
};

export const theme = {
  dark: {
    primary: {
      textColor: "#FFFFFF",
      bgColor: "#000",
      bgGradient: "#000021",
      blue: "#5386f1",
    },
  },
  light: {},
};

export const devices = {};
