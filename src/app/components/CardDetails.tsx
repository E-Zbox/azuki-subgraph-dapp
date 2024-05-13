import React, { useEffect, useState } from "react";
// api
import { ITokenTransferMetadata } from "@/api/interface";
import { getTokenApprovals, getTokenTransfers } from "@/api/apollo-client";
// store
import { useNFTApprovalsStore, useNFTTransfersStore } from "@/store";
// styles
import { Loader } from "../styles/Loader.styles";
import {
  CardDetails,
  CardPoster,
  MainCardDetails,
  MainTransactionTable,
  TraitsText,
  TraitsTitle,
  Transaction,
  TransactionScrollerTab,
  TransactionTable,
  TransactionTableTitle,
  TransactionText,
  TransactionTitle,
} from "../styles/nftHistoryPage/ScreenOne.styles";
import { FlexContainer } from "../styles/shared/Container.styles";
import { CustomLink } from "../styles/shared/Text.styles";
// utils
import { screens } from "@/utils/data";
import {
  HREF_APPROVAL,
  HREF_OWNERSHIP,
  HREF_TRANSFER,
} from "@/utils/nftHistory";

export default function ({
  selectedEventHref,
  token,
}: {
  selectedEventHref: string;
  token: ITokenTransferMetadata;
}) {
  const [nftApprovalsState, setNftApprovalsState] = useNFTApprovalsStore(
    (store) => [store.state, store.setState]
  );

  const [nftTransfersState, setNFTTransfersState] = useNFTTransfersStore(
    (store) => [store.state, store.setState]
  );

  const [approvalsLoadingState, setApprovalsLoadingState] = useState(false);
  const [transfersLoadingState, setTransfersLoadingState] = useState(false);
  const [columnState, setColumnsState] = useState({
    column_one: "",
    column_two: "",
  });

  const {
    default: {
      assets: { loaderGif },
    },
  } = screens;

  const handleTableRender = () => {
    switch (selectedEventHref) {
      case HREF_APPROVAL:
        if (nftApprovalsState[token.tokenId]) {
          return nftApprovalsState[token.tokenId].map(
            ({ owner, approved, blockTimestamp }, index) => {
              const fullDate = new Date(Number(blockTimestamp!) * 1_000);
              const date = fullDate.getDate();
              const month = fullDate.getMonth() + 1;
              const dateText = `${date > 9 ? date : `0${date}`}/${
                month > 9 ? month : `0${month}`
              }/${fullDate.getUTCFullYear()}`;
              return (
                <Transaction key={index}>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${owner.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${approved.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"300px"}>
                    <TransactionText>{dateText}</TransactionText>
                  </TransactionScrollerTab>
                </Transaction>
              );
            }
          );
        }
        break;
      case HREF_OWNERSHIP:
        if (nftTransfersState[token.tokenId]) {
          return nftTransfersState[token.tokenId].map(
            ({ from, to, blockTimestamp }, index) => {
              const fullDate = new Date(Number(blockTimestamp!) * 1_000);
              const date = fullDate.getDate();
              const month = fullDate.getMonth() + 1;
              const dateText = `${date > 9 ? date : `0${date}`}/${
                month > 9 ? month : `0${month}`
              }/${fullDate.getUTCFullYear()}`;
              return (
                <Transaction key={index}>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${from.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${to.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"300px"}>
                    <TransactionText>{dateText}</TransactionText>
                  </TransactionScrollerTab>
                </Transaction>
              );
            }
          );
        }
        break;
      case HREF_TRANSFER:
        if (nftTransfersState[token.tokenId]) {
          return nftTransfersState[token.tokenId].map(
            ({ from, to, blockTimestamp }, index) => {
              const fullDate = new Date(Number(blockTimestamp!) * 1_000);
              const date = fullDate.getDate();
              const month = fullDate.getMonth() + 1;
              const dateText = `${date > 9 ? date : `0${date}`}/${
                month > 9 ? month : `0${month}`
              }/${fullDate.getUTCFullYear()}`;
              return (
                <Transaction key={index}>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${from.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"100%"}>
                    <TransactionText>{`${to.substring(
                      0,
                      30
                    )}...`}</TransactionText>
                  </TransactionScrollerTab>
                  <TransactionScrollerTab $width={"300px"}>
                    <TransactionText>{dateText}</TransactionText>
                  </TransactionScrollerTab>
                </Transaction>
              );
            }
          );
        }
        break;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    switch (selectedEventHref) {
      case HREF_APPROVAL:
        setApprovalsLoadingState(true);

        getTokenApprovals(token.tokenId, "desc").then((res) => {
          const { data, error, success } = res;

          if (success) {
            setNftApprovalsState({ [token.tokenId]: data });
          }
        });

        setApprovalsLoadingState(false);

        setColumnsState({
          column_one: "Owner",
          column_two: "Approved",
        });
        break;
      case HREF_OWNERSHIP:
        break;
      default:
        break;
    }

    setTransfersLoadingState(true);

    getTokenTransfers(token.tokenId, "desc").then((res) => {
      const { data, error, success } = res;

      if (success) {
        setNFTTransfersState({ [token.tokenId]: data });
      }
    });

    setTransfersLoadingState(false);

    setColumnsState({
      column_one: "From",
      column_two: "To",
    });
  }, []);

  useEffect(() => {
    switch (selectedEventHref) {
      case HREF_APPROVAL:
        setApprovalsLoadingState(true);

        getTokenApprovals(token.tokenId, "desc").then((res) => {
          const { data, error, success } = res;

          if (success) {
            setNftApprovalsState({ [token.tokenId]: data });
          }
        });

        setApprovalsLoadingState(false);

        setColumnsState({
          column_one: "Owner",
          column_two: "Approved",
        });
        break;
      case HREF_TRANSFER:
        setTransfersLoadingState(true);

        getTokenTransfers(token.tokenId, "desc").then((res) => {
          const { data, error, success } = res;

          if (success) {
            setNFTTransfersState({ [token.tokenId]: data });
          }
        });

        setTransfersLoadingState(false);

        setColumnsState({
          column_one: "From",
          column_two: "To",
        });
        break;
      default:
        break;
    }
  }, [selectedEventHref]);

  return (
    <MainCardDetails>
      <CardDetails>
        <FlexContainer
          $alignItems="flex-end"
          $flexDirection="row"
          $justifyContent="flex-start"
          $height="100%"
          $width="100%"
        >
          <CardPoster $bgImg={token.image} />
          <FlexContainer
            $alignItems="flex-start"
            $flexDirection="column"
            $justifyContent="flex-end"
            $width={"300px"}
            $height={"300px"}
          >
            <FlexContainer
              $alignItems="center"
              $flexDirection="row"
              $justifyContent="flex-start"
              $padding="calc(var(--seven-px)*0.8) 0px"
            >
              <TraitsTitle>Name: </TraitsTitle>
              <TraitsText>{token.name}</TraitsText>
            </FlexContainer>
            {/* <FlexContainer
              $alignItems="center"
              $flexDirection="row"
              $justifyContent="flex-start"
              $padding="calc(var(--seven-px)*0.8) 0px"
            >
              <TraitsTitle>Traits: </TraitsTitle>
              <TraitsText>👁️ 👩🏻‍🦰</TraitsText>
            </FlexContainer> */}
            <FlexContainer
              $alignItems="center"
              $flexDirection="row"
              $justifyContent="flex-start"
              $padding="calc(var(--seven-px)*0.8) 0px"
            >
              <TraitsTitle>Owner: </TraitsTitle>
              <TraitsText $fontSize="1.3rem">
                {nftTransfersState[token.tokenId]
                  ? nftTransfersState[token.tokenId][0].to
                  : "0x..."}
              </TraitsText>
            </FlexContainer>
            <FlexContainer
              $alignItems="center"
              $flexDirection="row"
              $justifyContent="flex-start"
              $padding="calc(var(--ten-px)*3) 0px 0px 0px"
            >
              <TraitsTitle>Traits: </TraitsTitle>
              <CustomLink
                href={`https://www.azuki.com/gallery?id=${token.tokenId}`}
                target="_blank"
              >
                azuki.com/gallery
              </CustomLink>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </CardDetails>
      <MainTransactionTable>
        <TransactionTableTitle>{selectedEventHref}</TransactionTableTitle>
        <TransactionTable>
          <Transaction>
            <TransactionScrollerTab $width={"80%"}>
              <TransactionText $fontWeight={600}>
                {columnState.column_one}
              </TransactionText>
            </TransactionScrollerTab>
            <TransactionScrollerTab $width={"80%"}>
              <TransactionText $fontWeight={600}>
                {columnState.column_two}
              </TransactionText>
            </TransactionScrollerTab>
            <TransactionScrollerTab $width={"300px"}>
              <TransactionText $fontWeight={600}>Timestamp</TransactionText>
            </TransactionScrollerTab>
          </Transaction>
          {handleTableRender()}
        </TransactionTable>
        {approvalsLoadingState == true || transfersLoadingState == true ? (
          <FlexContainer
            $flexDirection="row"
            $justifyContent="center"
            $height="fit-content"
          >
            <Loader src={loaderGif.src} alt={loaderGif.src.substring(0, 11)} />
          </FlexContainer>
        ) : (
          <></>
        )}
      </MainTransactionTable>
    </MainCardDetails>
  );
}
