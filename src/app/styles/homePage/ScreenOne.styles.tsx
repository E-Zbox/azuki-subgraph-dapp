import styled from "styled-components";

interface ICard {
  $bgImg: string;
  $selected: boolean;
}

export const MainScreenOne = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}0b`};
  height: 80vh;
  overflow: hidden scroll;
  border-radius: 8px;
  margin-bottom: 50px;
  padding-bottom: calc(var(--ten-px) * 3);
`;

export const CardInfo = styled.div`
  display: grid;
  place-content: center;
  width: 280px;
  height: 300px;
  font-size: 1.4rem;
  font-weight: 400;
  scale: 0.65;
  padding: 0px var(--seven-px);
  border: 5px dashed #ffffff43;
  color: #ffffffc3;
  text-align: center;
  border-radius: 3px;
`;

export const CardButton = styled.a`
  --width: 240px;
  --height: 260px;
  text-decoration: none;
  display: grid;
  place-content: center;
  font-size: 2.2rem;
  font-weight: 600;
  scale: 0.65;
  padding: 0px var(--seven-px);
  color: #fffd;
  text-align: center;
  border-radius: 3px;
  border-top: calc(var(--height) / 2) solid transparent;
  border-left: calc(var(--width)) solid
    ${({
      theme: {
        primary: { blue },
      },
    }) => blue};
  border-bottom: calc(var(--height) / 2) solid transparent;
  border-right: 0px solid transparent;
  scale: 0.35;

  &:hover {
    scale: 0.45;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
`;

export const Card = styled.div<ICard>`
  position: relative;
  width: 280px;
  height: 300px;
  border-radius: 10px;
  background: url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ $selected }) =>
    $selected ? "150% auto" : "100% 100%"};
  overflow: hidden;
  border: ${({
    $selected,
    theme: {
      primary: { blue },
    },
  }) => ($selected ? `5px solid ${blue}` : "")};
  scale: ${({ $selected }) => ($selected ? "0.9" : "1")};
  margin: calc(var(--ten-px) * 1.5) auto;
  transition: background 450ms linear;

  & > div {
    transform: ${({ $selected }) =>
      $selected ? "translateY(0)" : "translateY(100%)"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: ${({ $selected }) => ($selected ? "#0003" : "#0006")};
    transition: 350ms linear;
  }

  &:active {
    scale: 0.9;
  }

  &:hover {
    background-size: ${({ $selected }) =>
      $selected ? "150% auto" : "120% 120%"};

    & > div {
      transform: translateY(0);
    }

    &::before {
      background-color: ${({ $selected }) => ($selected ? "#0003" : "#0004")};
    }
  }
`;

export const CardTitle = styled.h3`
  font-family: Jaro;
  font-size: 1.05rem;
  font-weight: 200;
  padding: calc(var(--ten-px) * 1.5);
  width: 100%;
`;
