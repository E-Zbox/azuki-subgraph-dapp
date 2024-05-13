"use client";
// screens
import HomePage from "@/app/screens/HomePage";
import NFTHistoryPage from "@/app/screens/NFTHistoryPage";
// store
import { useMenuStore } from "@/store";
// utils/
import { ITEM_HOME_HREF, ITEM_NFT_HISTORY_HREF } from "@/utils/menu";

export default function Home() {
  const [menuState] = useMenuStore((store) => [store.state, store.setState]);

  let selectedMenu = menuState.find(
    ({ href, selected, src, title }) => selected === true
  );

  if (!selectedMenu) {
    selectedMenu = menuState[0];
  }

  const { href } = selectedMenu;

  if (href === ITEM_HOME_HREF) {
    return <HomePage />;
  } else if (href === ITEM_NFT_HISTORY_HREF) {
    return <NFTHistoryPage />;
  }
  return <HomePage />;
}
