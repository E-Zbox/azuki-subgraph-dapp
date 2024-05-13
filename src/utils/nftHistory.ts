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

const dummyData = [
  {
    from: "0x29ea412cc10a9cfc08c2298f382b2fe01e6ca83b",
    to: "0xc8967d1537f7b995607a1dea2b0c06e18a9756a2",
    tokenId: "1",
    blockTimestamp: "1670045555",
  },
  {
    from: "0xd45058bf25bbd8f586124c479d384c8c708ce23a",
    to: "0x29ea412cc10a9cfc08c2298f382b2fe01e6ca83b",
    tokenId: "1",
    blockTimestamp: "1658264780",
  },
  {
    from: "0x0000000000000000000000000000000000000000",
    to: "0xd45058bf25bbd8f586124c479d384c8c708ce23a",
    tokenId: "1",
    blockTimestamp: "1641961048",
  },
  {
    from: "0x29ea412cc10a9cfc08c2298f382b2fe01e6ca83b",
    to: "0xc8967d1537f7b995607a1dea2b0c06e18a9756a2",
    tokenId: "1",
    blockTimestamp: "1670045555",
  },
  {
    from: "0xd45058bf25bbd8f586124c479d384c8c708ce23a",
    to: "0x29ea412cc10a9cfc08c2298f382b2fe01e6ca83b",
    tokenId: "1",
    blockTimestamp: "1658264780",
  },
  {
    from: "0x0000000000000000000000000000000000000000",
    to: "0xd45058bf25bbd8f586124c479d384c8c708ce23a",
    tokenId: "1",
    blockTimestamp: "1641961048",
  },
];

export default {
  events,
  dummyData,
};
