import { useEffect, useState } from "react";
// store
import { useMenuStore, useTokenMetadataStore } from "@/store";
// styles
import {
  Item,
  ItemTitle,
  ItemsContainer,
  MainMenu,
  MainTitle,
  MenuIcon,
} from "../styles/Menu.styles";
import { PositionContainer } from "../styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";

function Menu() {
  const [menuState, setMenuState] = useMenuStore((store) => [
    store.state,
    store.setState,
  ]);

  const [selectedState] = useTokenMetadataStore((store) => [
    store.selectedState,
  ]);

  const [showMenuState, setShowMenuState] = useState(true);

  const {
    menu: {
      images: { sidebarCloseIcon, sidebarOpenIcon },
      items,
    },
  } = screens;

  const toggleMenuState = () => {
    setShowMenuState(!showMenuState);
  };

  const handleNavigation = (index: number) => {
    if (selectedState.length == 0 && index == 1) {
      alert("Select at least one NFT to navigate to History");
      return;
    }
    const updatedState = menuState.map((item, _index) => ({
      ...item,
      selected: index === _index,
    }));
    setMenuState(updatedState);
  };

  useEffect(() => {
    let href = "";
    menuState.forEach((item) => {
      if (item.selected) {
        href = item.href;
      }
    });
  }, [menuState]);

  return (
    <MainMenu $showMenu={showMenuState}>
      <PositionContainer
        $position="relative"
        $flexDirection="row"
        $alignItems="center"
        $justifyContent="space-around"
        $width="100%"
        $padding="calc(var(--ten-px)*2) 0px 0px"
      >
        <MainTitle>Quick Jump</MainTitle>
        <MenuIcon
          $bgImg={showMenuState ? sidebarCloseIcon.src : sidebarOpenIcon.src}
          $showMenu={showMenuState}
          onClick={toggleMenuState}
        ></MenuIcon>
      </PositionContainer>
      <ItemsContainer>
        {menuState.map(({ href, selected, src, title }, index) => (
          <Item
            key={index}
            $selected={selected}
            onClick={() => handleNavigation(index)}
          >
            <MenuIcon $bgImg={src} $showMenu={true} />
            <ItemTitle>{title}</ItemTitle>
          </Item>
        ))}
      </ItemsContainer>
    </MainMenu>
  );
}

export default Menu;
