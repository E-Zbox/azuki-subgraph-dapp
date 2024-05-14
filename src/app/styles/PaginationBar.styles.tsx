import styled from "styled-components";

interface IMainPaginationBar {
  $hideShadow?: boolean;
}

interface IButton {
  $moveToLeft: boolean;
}

export const MainPaginationBar = styled.main<IMainPaginationBar>`
  width: 250px;
  height: 50px;
  max-width: calc(100vw - 20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  box-shadow: ${({
    $hideShadow,
    theme: {
      primary: { bgColor },
    },
  }) => ($hideShadow ? "" : `2px 3px 15px ${bgColor}3`)};
  background-color: ${({
    theme: {
      primary: { bgColor },
    },
  }) => `${bgColor}0`};
  border-radius: 5px;
  margin: calc(var(--ten-px)) 0px;

  * {
    color: ${({
      theme: {
        primary: { bgColor },
      },
    }) => bgColor};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageText = styled.h3`
  font-family: "Nunito Sans";
  font-size: 1rem;
  font-weight: 600;
  margin-right: var(--seven-px);
`;

export const PageInput = styled.input`
  height: 35px;
  width: 40px;
  text-align: center;
  border: none;
  padding: var(--ten-px);
  font-size: 1.4rem;
  font-weight: bolder;
  background-color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}21`};
  margin-right: var(--ten-px);
  border-radius: 3px;
  outline: 1px solid
    ${({
      theme: {
        primary: { textColor },
      },
    }) => `${textColor}2e`};

  &:focus {
    outline: 2px solid
      ${({
        theme: {
          primary: { blue },
        },
      }) => `${blue}94`};
  }
`;

export const Button = styled.button<IButton>`
  width: fit-content;
  height: fit-content;
  outline: none;
  display: grid;
  place-items: center;
  background: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}15`};
  scale: 1;
  border-radius: 5px;
  padding: calc(var(--seven-px) * 1.5);
  border: none;

  &:active {
    scale: 0.9;
  }

  &:hover {
    transform: translateX(
      ${({ $moveToLeft }) => ($moveToLeft ? "-5px" : "5px")}
    );
    background: linear-gradient(
      ${({
        $moveToLeft,
        theme: {
          primary: { textColor },
        },
      }) =>
        $moveToLeft
          ? `to left, ${textColor}75, ${textColor}05`
          : `to left, ${textColor}05, ${textColor}75`}
    );
  }
`;
