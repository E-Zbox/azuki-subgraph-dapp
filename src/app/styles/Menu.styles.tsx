import styled, { keyframes } from "styled-components";

interface IShowMenu {
  $showMenu: boolean;
}

interface IMenuIcon extends IShowMenu {
  $bgImg: string;
}

interface IItem {
  $selected: boolean;
}

const growAndShrink = keyframes`
    60% {
        scale: 1.2;
    }
    100% {
        scale: 1.05;
    }
`;

export const MainMenu = styled.main<IShowMenu>`
  position: fixed;
  top: 100px;
  left: 0px;
  width: 300px;
  height: fit-content;
  max-height: 450px;
  border: 2px solid #ffffff24;
  border-radius: 3px;
  //   padding: calc(var(--ten-px) * 1.5);
  transform: translateX(${({ $showMenu }) => ($showMenu ? "0%" : "-100%")});
`;

export const MainTitle = styled.h3`
  font-family: "Nunito Sans";
  font-size: 1.5rem;
  font-weight: 600;
`;

export const MenuIcon = styled.div<IMenuIcon>`
  --size: 28px;
  position: ${({ $showMenu }) => ($showMenu ? "static" : "absolute")};
  top: initial;
  right: 0px;
  height: var(--size);
  width: var(--size);
  background: url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transform: translateX(${({ $showMenu }) => ($showMenu ? "0px" : "120%")});

  &:hover {
    animation: ${growAndShrink} 650ms ease-in-out;
  }
`;

export const ItemsContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: calc(var(--ten-px) * 1.5);
  margin-top: calc(var(--ten-px));
  border-top: 1px solid #ffffff21;
`;

export const Item = styled.div<IItem>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: calc(var(--ten-px) * 1.5);
  margin-top: calc(var(--ten-px) * 1.5);
  cursor: pointer;
  opacity: ${({ $selected }) => ($selected ? "1" : "0.85")};
  scale: ${({ $selected }) => ($selected ? "1" : "0.85")};
  background-color: ${({
    $selected,
    theme: {
      primary: { blue },
    },
  }) => ($selected ? blue : "")};
  border-radius: ${({ $selected }) => ($selected ? "5px" : "0px")};

  &:first-of-type {
    margin-top: 0px;
  }

  &:hover {
    background-color: ${({
      theme: {
        primary: { blue },
      },
    }) => blue};
    border-radius: 5px;
    scale: ${({ $selected }) => ($selected ? "1" : "0.95")};
  }
`;

export const ItemTitle = styled.div`
  font-family: "Nunito Sans";
  font-size: 1.1rem;
  font-weight: 500;
  padding-left: calc(var(--ten-px) * 1.5);
`;

// export const ItemIcon = styled(MenuI)``;
