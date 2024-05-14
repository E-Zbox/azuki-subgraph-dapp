import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// styles
import {
  DynamicContent,
  DynamicContentContainer,
  DynamicContentTitle,
  Logo,
  LogoContainer,
  MainNavbar,
  MainTitle,
  Scroller,
} from "@/app/styles/navbar/dynamic.styles";
// utils
import { screens } from "@/utils/data";
import { FlexContainer } from "@/app/styles/shared/Container.styles";

const Dynamic = React.forwardRef<HTMLDivElement>((props, ref) => {
  const scrollerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [onFocusState, setOnFocusState] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  const {
    default: {
      assets: { externalLinkImg, theGraphDiamondImg },
    },
    navbar: {
      dynamic: { contents },
      exampleContent,
    },
  } = screens;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollCount == contents.length - 1) {
        setScrollCount(0);
      } else {
        setScrollCount((prevState) => prevState + 1);
      }
    }, 5500);

    scrollerRef.current.addEventListener("mouseover", () => {
      setOnFocusState(true);
    });

    scrollerRef.current.addEventListener("mouseleave", () => {
      setOnFocusState(false);
    });

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    const scrollBy =
      scrollerRef.current.children[0].children[0].clientWidth * scrollCount;
    scrollerRef.current.scrollTo({
      behavior: "auto",
      left: scrollBy,
      top: 0,
    });
  }, [scrollCount]);

  return (
    <MainNavbar ref={ref}>
      <Scroller ref={scrollerRef}>
        <DynamicContentContainer>
          {contents.map(({ src, title, url }, index) => (
            // <DynamicContent
            //   key={index}
            //   $bgImg={src}
            //   $width="100vw"
            // ></DynamicContent>
            <DynamicContent key={index} $bgImg={src} $width={"100vw"}>
              <FlexContainer
                $flexDirection="row"
                $justifyContent="flex-end"
                $alignItems="flex-end"
              >
                <DynamicContentTitle
                  href={url}
                  target="_blank"
                  $externalLinkImg={externalLinkImg.src}
                >
                  {title}
                </DynamicContentTitle>
              </FlexContainer>
            </DynamicContent>
          ))}
          <LogoContainer $onFocus={onFocusState}>
            <FlexContainer $width="fit-content">
              <Logo
                src={theGraphDiamondImg.src}
                alt={theGraphDiamondImg.src.substring(0, 11)}
              />
              <FlexContainer
                $flexDirection="row"
                $alignItems="center"
                $justifyContent="flex-start"
                $width="fit-content"
              >
                <MainTitle>AZUKI</MainTitle>
              </FlexContainer>
            </FlexContainer>
          </LogoContainer>
        </DynamicContentContainer>
      </Scroller>
    </MainNavbar>
  );
});

Dynamic.displayName = "Dynamic";

export default Dynamic;
