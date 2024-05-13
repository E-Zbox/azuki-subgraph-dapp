import styled from "styled-components";
// styles
import { CustomLink } from "../shared/Text.styles";

interface IDynamicContent {
  $bgImg: string;
  $width: string;
}

interface IDynamicContentTitle {
  $externalLinkImg: string;
}

interface ILogoContainer {
  $onFocus: boolean;
}

export const MainNavbar = styled.main`
  position: relative;
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // border: 1px solid red;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 120px;
    bottom: -20px;
    left: 0px;
    z-index: 0;
    background: linear-gradient(
      to bottom,
      #000d,
      #000d,
      #000d,
      ${({
        theme: {
          primary: { bgGradient },
        },
      }) => `${bgGradient}f2`},
      #0002
    );
    // border: 2px solid #ddd5;
  }
`;

export const Scroller = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

export const DynamicContentContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

export const DynamicContent = styled.div<IDynamicContent>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: ${({ $width }) => $width};
  background: linear-gradient(to right, #000c, #000a, #0003, #000a, #000c),
    linear-gradient(to bottom, #0001, #0001, #0001, #0006, #0008),
    url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  z-index: 1;
  padding: 0px calc(var(--ten-px) * 2) calc(var(--ten-px) * 2.5);
  // transition: 750ms ease-in;
  border-bottom: none;

  &:hover {
    background: linear-gradient(to right, #000a, #0009, #0001, #0009, #000a),
      // linear-gradient(to bottom, #0001, #0001, #0001, #0003, #0005),
      linear-gradient(to bottom, #0001, #0001, #0001, #0006, #0008),
      url(${({ $bgImg }) => $bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    padding-bottom: var(--ten-px);
  }
`;

export const DynamicContentTitle = styled(CustomLink)<IDynamicContentTitle>`
  font-size: 1.5rem;
  width: fit-content;
  max-width: calc(100% - 200px);
  color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}BD`};
  padding-left: 0px;
  cursor: pointer;

  &:hover {
    &::before {
      --size: 24px;
      content: "";
      position: absolute;
      bottom: 0px;
      left: calc(var(--size) * -1);
      width: var(--size);
      height: var(--size);
      background: url(${({ $externalLinkImg }) => $externalLinkImg});
      background-size: contain;
      z-index: 2;
    }
  }
`;

export const LogoContainer = styled.div<ILogoContainer>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  padding: 0px calc(var(--ten-px) * 4)
    ${({ $onFocus }) =>
      $onFocus ? "var(--ten-px)" : "calc(var(--ten-px) * 2.5)"};
  z-index: 1;
`;

export const Logo = styled.img`
  --size: 120px;
  width: var(--size);
  height: var(--size);
`;

export const MainTitle = styled.h3`
  font-family: Jaro;
  font-size: 3rem;
  font-weight: 200;
  color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}BD`};
`;
