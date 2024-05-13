// assets
import activityIcon from "../../public/icons8-analytics-64.png";
import homeIcon from "../../public/icons8-home.svg";
import historyIcon from "../../public/icons8-history-80.png";
import sidebarCloseIcon from "../../public/icons8-sidebar-close-50.png";
import sidebarOpenIcon from "../../public/icons8-sidebar-open-50.png";

export interface IItem {
  href: string;
  selected: boolean;
  src: string;
  title: string;
}

export const ITEM_HOME_HREF = "home";

export const ITEM_NFT_HISTORY_HREF = "nftHistory";

export const ITEM_ACTIVITY_HREF = "activity";

const items: IItem[] = [
  {
    href: ITEM_HOME_HREF,
    selected: true,
    src: homeIcon.src,
    title: "Home",
  },
  {
    href: ITEM_NFT_HISTORY_HREF,
    selected: false,
    src: historyIcon.src,
    title: "NFT History",
  },
  {
    href: ITEM_ACTIVITY_HREF,
    selected: false,
    src: activityIcon.src,
    title: "Activity",
  },
];

export default {
  images: {
    sidebarCloseIcon,
    sidebarOpenIcon,
  },
  items,
};

/**
 * include reference to icon8 for their free icon
 * <a target="_blank" href="https://icons8.com/icon/97655/hide-sidepanel">sidebar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 */
