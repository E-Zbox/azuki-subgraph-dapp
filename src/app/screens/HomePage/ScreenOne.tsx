import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// api
import { getTokensMetadata } from "@/api/apollo-client";
import { ITokenTransferMetadata } from "@/api/interface";
// store
import { useTokenMetadataStore } from "@/store";
// styles
import {
  Card,
  CardButton,
  CardInfo,
  CardTitle,
  MainScreenOne,
  Span,
} from "@/app/styles/homePage/ScreenOne.styles";
import { Loader } from "@/app/styles/Loader.styles";
import {
  FlexContainer,
  PositionContainer,
} from "@/app/styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";

const LOCAL_STORAGE_TOKEN_TRANSFERS = "tokenTransfers";

const ScreenOne = () => {
  const mainScreenOneRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [loadingState, setLoadingState] = useState(false);

  const [state, setState] = useTokenMetadataStore((store) => [
    store.state,
    store.setState,
  ]);

  const [selectedState, addSelectedState, removeSelectedState] =
    useTokenMetadataStore((store) => [
      store.selectedState,
      store.addSelectedState,
      store.removeSelectedState,
    ]);

  const {
    default: {
      assets: { loaderGif },
    },
  } = screens;

  const fetchMoreData = async () => {
    let tokenId_gte = 0;

    if (state.length > 0) {
      tokenId_gte = Number(state[state.length - 1].tokenId) + 1;

      getTokensMetadata(10, tokenId_gte).then((res) => {
        const { data, error, success } = res;

        if (success) {
          let newState = [...state, ...data];
          setState(newState);
        }
        setLoadingState(false);
      });
    }
  };

  const handleCardClick = (_tokenId: string) => {
    const updatedTransferArrayState = state.map(({ tokenId, ...others }) => {
      if (tokenId === _tokenId) {
        if (others.selected == false) {
          addSelectedState({ ...others, tokenId, selected: !others.selected });
        } else {
          removeSelectedState(tokenId);
        }
        return { ...others, tokenId, selected: !others.selected };
      }
      return { ...others, tokenId };
    });

    setState(updatedTransferArrayState);
  };

  const handleInfiniteScroll = () => {
    if (!loadingState) {
      const target = mainScreenOneRef.current;
      if (target.scrollHeight - target.clientHeight < target.scrollTop + 2) {
        setLoadingState(true);
        fetchMoreData();
      }
    }
  };

  useEffect(() => {
    // check localStorage if tokenTransfers exist
    const tokenTransfers = localStorage.getItem(LOCAL_STORAGE_TOKEN_TRANSFERS);

    setLoadingState(true);

    if (!tokenTransfers) {
      getTokensMetadata(10, 0).then((res) => {
        const { data, error, success } = res;

        if (success) {
          setState(data);
        }
      });
    } else {
      let parsedData = JSON.parse(tokenTransfers);

      if (parsedData.length) {
        setState(parsedData);
      }
    }
    setLoadingState(false);
  }, []);

  useEffect(() => {
    /**
     * there's no dependency array because we want it to re-initialize in every re-render,
     * so that it can used the updated value of state
     */
    // add event listener to MainScreenOne for infinite scrolling functionality
    const mainScreenOne = mainScreenOneRef.current;
    mainScreenOne.addEventListener("scrollend", handleInfiniteScroll);

    return () =>
      mainScreenOne.removeEventListener("scrollend", handleInfiniteScroll);
  });

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_TRANSFERS,
        JSON.stringify(state)
      );
    }

    state.forEach((item) => {
      if (!item.selected) {
        return;
      }

      let inSelectedState = selectedState.filter(
        ({ tokenId }) => item.tokenId === tokenId
      );

      if (inSelectedState.length > 0) {
        return;
      }

      addSelectedState(item);
    });
  }, [state]);

  return (
    <MainScreenOne ref={mainScreenOneRef}>
      <FlexContainer
        $alignItems="center"
        $flexDirection="row"
        $flexWrap="wrap"
        $justifyContent="center"
        $padding="calc(var(--ten-px)*3) calc(var(--ten-px)*3) 0px"
      >
        {selectedState.length > 0 ? (
          <></>
        ) : (
          <CardInfo>Select Items to show History</CardInfo>
        )}
        {state.map(({ image, name, selected, tokenId }, index) => (
          <Card
            key={index}
            $bgImg={image || ""}
            $selected={selected}
            onClick={() => handleCardClick(tokenId)}
          >
            <PositionContainer $bgColor={"#000b"} $bottom={"0px"} $left={"0px"}>
              <CardTitle>{name}</CardTitle>
            </PositionContainer>
          </Card>
        ))}
      </FlexContainer>
      {loadingState == true ? (
        <Loader src={loaderGif.src} alt={loaderGif.src.substring(0, 11)} />
      ) : (
        <></>
      )}
    </MainScreenOne>
  );
};

export default ScreenOne;
