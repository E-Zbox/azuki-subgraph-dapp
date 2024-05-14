import styled from "styled-components";

interface IMainSearch {
  $width?: number;
  $height?: string;
  $onFocus: boolean;
}

interface ISearchContainer {
  $onFocus: boolean;
}

interface ISearchResultText {
  $fontSize?: string;
}

export const MainSearch = styled.main<IMainSearch>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: ${({ $height }) => $height || "40px"};
  width: ${({ $width, $onFocus }) =>
    $onFocus == true
      ? `${$width ? $width * 1.75 : 250 * 1.75}px`
      : $width
      ? `${$width}px`
      : "250px"};
  margin: 0px calc(var(--ten-px) * 1.4);
  border-radius: 5px;
  border: 1px solid
    ${({
      $onFocus,
      theme: {
        primary: { textColor },
      },
    }) => ($onFocus ? "transparent" : `${textColor}33`)};
  overflow: ${({ $onFocus }) => ($onFocus ? "" : "hidden")};
  z-index: 2;
`;

export const SearchContainer = styled.div<ISearchContainer>`
  position: ${({ $onFocus }) => ($onFocus ? "absolute" : "")};
  top: -25px;
  left: 0px;
  height: ${({ $onFocus }) => ($onFocus ? "fit-content" : "100%")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background-color: ${({
    theme: {
      primary: { textColor },
    },
    $onFocus,
  }) => `${textColor}${$onFocus ? "f3" : "20"}`};
  padding: var(--three-px) var(--ten-px);
  border: ${({
    $onFocus,
    theme: {
      primary: { blue },
    },
  }) => ($onFocus ? `3px solid ${blue}` : "")};
  transform: translate(0, 0);
`;

export const TextInput = styled.input`
  position: relative;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  padding: var(--seven-px);
  padding-left: var(--three-px);
  font-size: 0.93rem;
  color: ${({
    theme: {
      primary: { bgColor },
    },
  }) => bgColor};
`;

export const Logo = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchResultContainer = styled.div<ISearchContainer>`
  width: ${({ $onFocus }) => ($onFocus ? "100%" : "0px")};
  height: ${({ $onFocus }) => ($onFocus ? "fit-content" : "0px")};
  border-top: 1px solid #ccc;
  padding: calc(var(--seven-px) * 0.5);
  visibility: ${({ $onFocus }) => ($onFocus ? "visible" : "hidden")};

  * {
    color: #444;
  }
`;

export const SearchResultTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: bold;
  margin-bottom: var(--three-px);
`;

export const SearchResultText = styled.h3<ISearchResultText>`
  font-size: ${({ $fontSize }) => $fontSize || "1.2rem"};
  font-weight: thin;
  padding: var(--seven-px);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: ${({
      theme: {
        primary: { textColor },
      },
    }) => textColor};
    background-color: ${({
      theme: {
        primary: { blue },
      },
    }) => `${blue}a4`};
  }
`;
