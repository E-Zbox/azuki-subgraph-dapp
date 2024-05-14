import styled from "styled-components";

interface ILoader {
  $size?: string;
}

export const Loader = styled.img<ILoader>`
  --size: ${({ $size }) => $size || "40px"};
  width: var(--size);
  height: var(--size);
`;
