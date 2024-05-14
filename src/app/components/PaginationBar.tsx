import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// styles
import {
  Button,
  MainPaginationBar,
  PageInput,
  PageText,
  PaginationContainer,
} from "../styles/PaginationBar.styles";
// utils
import { screens } from "@/utils/data";

const PaginationBar = ({
  pageData: { page, totalPages },
  setPageData,
}: {
  pageData: { page: number; totalPages: number };
  setPageData: Dispatch<
    SetStateAction<{
      maxItemsPerPage: number;
      page: number;
      totalPages: number;
    }>
  >;
}) => {
  const {
    default: {
      assets: { leftButton, rightButton },
    },
  } = screens;

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    const _value = Number(value);

    if (_value > totalPages || _value < 1) {
      return;
    }

    setPageData((prevState) => ({ ...prevState, page: _value }));
  };

  const increasePage = (value: number) => {
    if (value == 1) {
      if (page == totalPages) return;
      setPageData((prevState) => ({ ...prevState, page: prevState.page + 1 }));
    } else {
      if (page == 1) return;
      setPageData((prevState) => ({ ...prevState, page: prevState.page - 1 }));
    }
  };

  return totalPages > 0 ? (
    <MainPaginationBar>
      <Button $moveToLeft={false} onClick={() => increasePage(-1)}>
        <Image
          height={14}
          width={14}
          src={leftButton.src}
          alt={leftButton.src.substring(0, 11)}
        />
      </Button>
      <PaginationContainer>
        <PageText>Page</PageText>
        {totalPages === 1 ? (
          <PageText>{page}</PageText>
        ) : (
          <PageInput
            id="input_pagination"
            name="input_pagination"
            value={page}
            onChange={handleInputChange}
          />
        )}
        <PageText>of</PageText>
        <PageText>{totalPages}</PageText>
      </PaginationContainer>
      <Button $moveToLeft={true} onClick={() => increasePage(1)}>
        <Image
          height={14}
          width={14}
          src={rightButton.src}
          alt={rightButton.src.substring(0, 11)}
        />
      </Button>
    </MainPaginationBar>
  ) : (
    <></>
  );
};

// PaginationBar.displayName = "PaginationBar"

export default PaginationBar;
