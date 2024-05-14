export interface IEvent {
  href: string;
  selected: boolean;
  title: string;
}

export const HREF_APPROVAL = "approvals";
export const HREF_OWNERSHIP = "ownerships";
export const HREF_TRANSFER = "transfers";

const events: IEvent[] = [
  {
    href: HREF_APPROVAL,
    selected: false,
    title: "Approvals",
  },
  {
    href: HREF_OWNERSHIP,
    selected: false,
    title: "Ownerships",
  },
  {
    href: HREF_TRANSFER,
    selected: true,
    title: "Transfers",
  },
];

const commonTraitsURL = {
  type: {
    url: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F468%20U%2B200D%20U%2B1F9B1.png",
  },
  hair: {
    url: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F469%20U%2B200D%20U%2B1F9B0.png",
  },
  ear: {
    url: "",
  },
  clothing: {
    url: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F45A.png",
  },
  mouth: {
    url: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F444.png",
  },
  eyes: {
    url: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F440.png",
  },
};

export default {
  events,
};
