import styled from "styled-components";

interface ICustomLink {
  $fontSize?: string;
}

export const CustomLink = styled.a<ICustomLink>`
  position: relative;
  font-size: ${({ $fontSize }) => $fontSize || "1.5rem"};
  padding-left: var(--ten-px);
  font-weight: bold;
  text-decoration: none;
  padding: var(--seven-px) 0px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: ${({
      theme: {
        primary: { textColor },
      },
    }) => textColor};
    transition: 350ms ease-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
