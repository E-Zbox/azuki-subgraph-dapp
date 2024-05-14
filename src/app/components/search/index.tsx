import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
// api
import { getTokenMetadata } from "@/api/apollo-client";
// store
import {
  useMenuStore,
  useSearchHistoryStore,
  useTokenMetadataStore,
} from "@/store";
// styles
import { Loader } from "@/app/styles/Loader.styles";
import {
  Logo,
  MainSearch,
  SearchContainer,
  SearchResultContainer,
  SearchResultText,
  SearchResultTitle,
  TextInput,
} from "@/app/styles/search/index.styles";
// utils
import { screens } from "@/utils/data";
import { FlexContainer } from "@/app/styles/shared/Container.styles";
import { ITEM_NFT_HISTORY_HREF } from "@/utils/menu";

function Search() {
  const textInputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [onFocusState, setOnFocusState] = useState(false);
  const [formState, setFormState] = useState({ input_search: "#" });
  const [searchResult, setSearchResult] = useState("");

  const [menuState, setMenuState] = useMenuStore((store) => [
    store.state,
    store.setState,
  ]);

  const [searchHistoryState, setSearchHistoryState] = useSearchHistoryStore(
    (store) => [store.state, store.setState]
  );

  const [selectedState, setSelectedState] = useTokenMetadataStore((store) => [
    store.selectedState,
    store.setSelectedState,
  ]);

  const {
    default: {
      assets: { loaderGif },
    },
    navbar: { searchIcon },
  } = screens;

  const handleBlur = ({ relatedTarget }: FocusEvent<HTMLInputElement>) => {
    if (!relatedTarget) {
      setOnFocusState(false);
    }
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length > 1) {
      value = value.substring(1);

      if (!Number(value) && Number(value) !== 0) {
        value = value.substring(0, value.length - 1);
      }
    }

    if (value === "#") {
      value = "";
    }

    setFormState({ ...formState, [name]: `#${value}` });
  };

  const handleNavigation = async (tokenId: number) => {
    console.log({ tokenId });
    const { data, error, success } = await getTokenMetadata(tokenId);

    console.log({ data, error, success });
    if (success) {
      console.log({ data });
      const updatedState = menuState.map((item) => ({
        ...item,
        selected: ITEM_NFT_HISTORY_HREF === item.href,
      }));
      setOnFocusState(false);
      setSelectedState([data]);
      setMenuState(updatedState);
    }
  };

  const handleSubmit = async () => {
    const { input_search } = formState;

    if (input_search.length == 0) {
      alert("Enter an NFT tokenId to search");
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);

    setSearchResult(`${input_search}`);

    setLoading(false);

    // clearTimeout(id);
  };

  useEffect(() => {
    if (!onFocusState) {
      setFormState({ ...formState, input_search: "" });
    }
  }, [onFocusState, setFormState]);

  useEffect(() => {
    let historyStateCopy = [...searchHistoryState];
    historyStateCopy.splice(4);

    if (searchResult.length > 0) {
      setSearchHistoryState([searchResult, ...historyStateCopy]);
    }
  }, [searchResult, setSearchHistoryState]);

  return (
    <MainSearch
      $height={onFocusState ? "fit-content" : ""}
      $onFocus={onFocusState}
    >
      <SearchContainer $onFocus={onFocusState}>
        <FlexContainer
          $flexDirection="row"
          $height="40px"
          $justifyContent="space-between"
          $alignItems="center"
        >
          <Logo
            src={searchIcon.src}
            alt={searchIcon.src.substring(0, 11)}
            tabIndex={0}
            onClick={handleSubmit}
          />
          <TextInput
            placeholder="Search for tokenId e.g '#2'"
            ref={textInputRef.current}
            id="input_search"
            name="input_search"
            value={formState.input_search}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={() => setOnFocusState(true)}
          />
        </FlexContainer>
        {searchHistoryState.length > 0 ? (
          <SearchResultContainer $onFocus={onFocusState}>
            <SearchResultTitle>Recent searches</SearchResultTitle>
            {searchHistoryState.map((text, index) => (
              <SearchResultText
                key={index}
                $fontSize="1rem"
                onClick={() => handleNavigation(Number(text.substring(1)))}
              >
                Azuki {text}
              </SearchResultText>
            ))}
          </SearchResultContainer>
        ) : (
          <></>
        )}
        {searchResult.length > 1 ? (
          <SearchResultContainer $onFocus={onFocusState}>
            <SearchResultTitle>1 Result found</SearchResultTitle>
            <SearchResultText
              onClick={() =>
                handleNavigation(Number(searchResult.substring(1)))
              }
            >
              Azuki {searchResult}
            </SearchResultText>
          </SearchResultContainer>
        ) : (
          <></>
        )}
      </SearchContainer>
    </MainSearch>
  );
}

export default Search;
