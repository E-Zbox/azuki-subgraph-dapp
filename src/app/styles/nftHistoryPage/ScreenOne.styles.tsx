import styled from "styled-components";

interface ICardPoster {
  $bgImg: string;
}

interface IEntityButton {
  $selected: boolean;
}

interface ITraitsText {
  $fontSize?: string;
}

interface ITransactionScrollerTab {
  $width?: string;
}

interface ITransactionText {
  $fontSize?: string;
  $fontWeight?: number;
}

export const MainTitle = styled.h3`
  font-family: sans-serif;
  font-size: 1.02rem;
  font-weight: 400;
  opacity: 0.58;
  width: fit-content;
`;

export const EntityScroller = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-x: scroll;
  padding-left: calc(var(--ten-px) * 1.5);
`;

export const EntityButton = styled.button<IEntityButton>`
  --color: ${({
    theme: {
      primary: { blue },
    },
  }) => `${blue}FA`};
  position: relative;
  color: ${({
    $selected,
    theme: {
      primary: { textColor },
    },
  }) => ($selected ? textColor : `${textColor}9A`)};
  border: 1px solid
    ${({
      $selected,
      theme: {
        primary: { textColor },
      },
    }) => ($selected ? "var(--color)" : `${textColor}9A`)};
  outline: none;
  border-radius: 50px;
  background-color: ${({
    $selected,
    theme: {
      primary: { blue },
    },
  }) => ($selected ? blue : "transparent")};
  font-size: 0.9rem;
  letter-spacing: 1px;
  scale: ${({ $selected }) => ($selected ? "1" : "0.9")};
  margin-left: calc(var(--ten-px) * 1);
  padding: calc(var(--ten-px) * 1) calc(var(--ten-px) * 2.3);
  overflow: hidden;
  z-index: 0;

  &:active {
    scale: ${({ $selected }) => ($selected ? "1" : "0.85")};
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border-radius: 50px;
    z-index: -1;
    transition: 450ms ease-in;
  }

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    --hoverColor: ${({
      theme: {
        primary: { blue },
      },
    }) => `${blue}BA`};
    border-color: var(--hoverColor);
    color: ${({
      theme: {
        primary: { textColor },
      },
    }) => textColor};

    &::before {
      height: 120%;
      width: 120%;
      background-color: ${({ $selected }) =>
        $selected ? "" : "var(--hoverColor)"};
    }
  }
`;

export const MainCardDetails = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: calc(var(--ten-px) * 3);
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 300px;
  background-color: ${({
    theme: {
      primary: { bgColor },
    },
  }) => `${bgColor}7`};
  padding: calc(var(--ten-px) * 3);
  margin-bottom: calc(var(--ten-px) * 1.5);
`;

export const CardPoster = styled.div<ICardPoster>`
  height: 100%;
  width: auto;
  aspect-ratio: 1;
  border-radius: 5px;
  background-color: transparent;
  background: url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: calc(var(--ten-px) * 3);
`;

export const TraitsTitle = styled(MainTitle)`
  opacity: 0.15;
  font-size: 1.05rem;
  font-weight: 400;
  margin-right: calc(var(--ten-px) * 1.5);
`;

export const TraitsText = styled.h3<ITraitsText>`
  font-family: "Macondo", cursive;
  font-size: ${({ $fontSize }) => $fontSize || "1.8rem"};
  font-weight: 400;
  letter-spacing: 2px;
`;

export const MainTransactionTable = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px calc(var(--ten-px) * 2);
`;

export const TransactionTable = styled.div`
  height: 390px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--ten-px) * 2);
  padding: 0px var(--three-px);
  background-color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}9A`};
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

export const Transaction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid
    ${({
      theme: {
        primary: { bgColor },
      },
    }) => `${bgColor}3`};
  border-radius: 3px;
`;

export const TransactionTableTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bolder;
  color: ${({
    theme: {
      primary: { textColor },
    },
  }) => textColor};
  text-transform: capitalize;
`;

export const TransactionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bolder;
  color: ${({
    theme: {
      primary: { bgColor },
    },
  }) => bgColor};
`;

export const TransactionScrollerTab = styled.div<ITransactionScrollerTab>`
  width: ${({ $width }) => $width || "fit-content"};
  overflow-x: scroll;
  margin: 0px calc(var(--ten-px) * 1);
`;

export const TransactionText = styled.h3<ITransactionText>`
  //   width: fit-content;
  font-family: "Nunito Sans";
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};
  padding: calc(var(--ten-px) * 1.5) 0px;
  text-align: left;
  color: ${({
    theme: {
      primary: { bgColor },
    },
  }) => bgColor};
`;
