import { useEffect, useState } from "react";
// components
import CardDetails from "@/app/components/CardDetails";
// store
import { useNFTEventStore, useTokenMetadataStore } from "@/store";
// styles
import { MainScreenOne } from "@/app/styles/homePage/ScreenOne.styles";
import {
  EntityButton,
  EntityScroller,
  MainTitle,
} from "@/app/styles/nftHistoryPage/ScreenOne.styles";
import { FlexContainer } from "@/app/styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";
import { IEvent } from "@/utils/nftHistory";

const ScreenOne = () => {
  const [eventsState, setEventsState] = useNFTEventStore((store) => [
    store.state,
    store.setState,
  ]);

  const [selectedState] = useTokenMetadataStore((store) => [
    store.selectedState,
  ]);

  const [selectedEventState, setSelectedEventState] = useState<IEvent>();

  const {
    // nftHistory: { events },
  } = screens;

  const handleEventClick = (index: number) => {
    const updatedEvents = eventsState.map((item, _index) => {
      if (index === _index) {
        setSelectedEventState(item);
      }
      return {
        ...item,
        selected: index === _index,
      };
    });

    setEventsState(updatedEvents);
  };

  useEffect(() => {
    if (!selectedEventState) {
      const selectedItem = eventsState.find((item) => item.selected);
      setSelectedEventState(selectedItem);
    }
  }, [eventsState]);

  return (
    <MainScreenOne>
      <FlexContainer
        $alignItems="center"
        $flexDirection="column"
        $justifyContent="flex-start"
        $padding="calc(var(--ten-px)*2) calc(var(--ten-px)*3)"
      >
        <FlexContainer
          $alignItems="center"
          $flexDirection="row"
          $justifyContent="flex-start"
        >
          <MainTitle>Events:</MainTitle>
          <EntityScroller>
            <FlexContainer
              $alignItems="center"
              $flexDirection="row"
              $justifyContent="flex-start"
              $width="fit-content"
            >
              {eventsState.map(({ href, selected, title }, index) => (
                <EntityButton
                  key={index}
                  $selected={selected}
                  onClick={() => handleEventClick(index)}
                >
                  {title}
                </EntityButton>
              ))}
            </FlexContainer>
          </EntityScroller>
        </FlexContainer>
      </FlexContainer>
      {selectedEventState ? (
        selectedState.map((token, index) => (
          <CardDetails
            key={index}
            selectedEventHref={selectedEventState.href}
            token={token}
          />
        ))
      ) : (
        <></>
      )}
    </MainScreenOne>
  );
};

export default ScreenOne;
