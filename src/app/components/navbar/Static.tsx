import React from "react";
// components
import Menu from "../Menu";
import Search from "../search";
// styles
import {
  Logo,
  MainNav,
  MainTitle,
  SubTitle,
} from "../../styles/navbar/static.styles";
import { FlexContainer } from "../../styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";
import { CustomLink } from "@/app/styles/shared/Text.styles";

const Static = () => {
  const {
    default: {
      assets: { theGraphDiamondImg },
    },
  } = screens;

  return (
    <MainNav>
      <Menu />
      <FlexContainer
        $flexDirection="row"
        $alignItems="center"
        $justifyContent="space-between"
      >
        <FlexContainer $flexDirection="row" $alignItems="center">
          <Logo
            src={theGraphDiamondImg.src}
            alt={theGraphDiamondImg.src.substring(0, 10)}
          />
          <MainTitle>AZUKI</MainTitle>
          <SubTitle>SUBGRAPH</SubTitle>
        </FlexContainer>
        <FlexContainer
          $flexDirection="row"
          $alignItems="center"
          $justifyContent="flex-start"
          $width="fit-content"
        >
          <Search />
          <CustomLink>About</CustomLink>
        </FlexContainer>
      </FlexContainer>
    </MainNav>
  );
};

export default Static;
