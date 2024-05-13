import styled from "styled-components";

interface IFlexContainer {
  $alignItems?: string;
  $flexDirection?: string;
  $flexWrap?: string;
  $height?: string;
  $justifyContent?: string;
  $width?: string;
  $padding?: string;
  $bgColor?: string;
  $alignItemsXS?: string;
  $flexDirectionXS?: string;
  $heightXS?: string;
  $justifyContentXS?: string;
  $widthXS?: string;
  $paddingXS?: string;
}

interface IPositionContainer {
  $position?: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  flex-wrap: ${({ $flexWrap }) => $flexWrap || "nowrap"};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  height: ${({ $height }) => $height || "fit-content"};
  width: ${({ $width }) => $width || "100%"};
  padding: ${({ $padding }) => $padding};
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
`;

export const PositionContainer = styled(FlexContainer)<IPositionContainer>`
  position: ${({ $position }) => $position || "absolute"};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  right: ${({ $right }) => $right};
`;
