import styled from "styled-components";

export const MainNav = styled.main`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 76px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px calc(var(--ten-px) * 1.3);
  padding-right: calc(var(--ten-px) * 8);
  /** background-color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}08`};
  */
  background-color: #212131;
  z-index: 1; // must be in sync with dynamic.styles.tsx MainNavbar z-index
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
`;

export const MainTitle = styled.h3`
  font-size: 2rem;
  padding-left: var(--ten-px);
  font-weight: 200;
`;

export const SubTitle = styled.h3`
  color: ${({
    theme: {
      primary: { textColor },
    },
  }) => `${textColor}0D`};
  font-family: Jaro;
  font-size: 2.4rem;
  font-weight: 400;
  padding-left: var(--ten-px);
`;
