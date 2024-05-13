import { create } from "zustand";
// interfaces
import {
  ITokenApproval,
  ITokenTransfer,
  ITokenTransferMetadata,
} from "@/api/interface";
// utils
import { screens } from "@/utils/data";
// utils/interfaces
import { IItem } from "@/utils/menu";
import { IEvent } from "@/utils/nftHistory";

interface INFTGeneric<T> {
  [name: string]: T;
}

interface INFTApproval extends INFTGeneric<ITokenApproval[]> {}

interface INFTTransfer extends INFTGeneric<ITokenTransfer[]> {}

type IMenuStore = {
  state: IItem[];
  setState: (updatedState: IItem[]) => void;
};

type INFTEventStore = {
  state: IEvent[];
  setState: (updatedState: IEvent[]) => void;
};

type INFTApprovalStore = {
  state: INFTApproval;
  setState: (updatedState: INFTApproval) => void;
};

type INFTTransferStore = {
  state: INFTTransfer;
  setState: (updatedState: INFTTransfer) => void;
};

type ITokenTransferMetadataStore = {
  state: ITokenTransferMetadata[];
  setState: (updatedState: ITokenTransferMetadata[]) => void;
  selectedState: ITokenTransferMetadata[];
  setSelectedState: (newState: ITokenTransferMetadata[]) => void;
  removeSelectedState: (tokenId: string) => void;
  addSelectedState: (updatedState: ITokenTransferMetadata) => void;
};

type ISearchHistoryStore = {
  state: string[];
  setState: (updatedState: string[]) => void;
};

export const useMenuStore = create<IMenuStore>((set) => ({
  state: screens.menu.items,
  setState: (updatedState: IItem[]) =>
    set((_state) => ({ state: updatedState })),
}));

export const useNFTApprovalsStore = create<INFTApprovalStore>((set) => ({
  state: {},
  setState: (updatedState: INFTApproval) =>
    set((_state) => ({ state: { ..._state.state, ...updatedState } })),
}));

export const useNFTEventStore = create<INFTEventStore>((set) => ({
  state: screens.nftHistory.events,
  setState: (updatedState: IEvent[]) =>
    set((_state) => ({ state: updatedState })),
}));

export const useNFTTransfersStore = create<INFTTransferStore>((set) => ({
  state: {},
  setState: (updatedState: INFTTransfer) =>
    set((_state) => ({ state: { ..._state.state, ...updatedState } })),
}));

export const useSearchHistoryStore = create<ISearchHistoryStore>((set) => ({
  state: [],
  setState: (updatedState: string[]) =>
    set((_state) => ({ state: updatedState })),
}));

export const useTokenMetadataStore = create<ITokenTransferMetadataStore>(
  (set) => ({
    state: [],
    setState: (updatedState: ITokenTransferMetadata[]) =>
      set((_state) => ({ state: [...updatedState] })),
    selectedState: [],
    setSelectedState: (newState: ITokenTransferMetadata[]) =>
      set((_state) => ({ selectedState: newState })),
    removeSelectedState: (_tokenId: string) =>
      set((_state) => ({
        selectedState: _state.selectedState.filter(
          ({ tokenId }) => tokenId !== _tokenId
        ),
      })),
    addSelectedState: (newState: ITokenTransferMetadata) =>
      set((_state) => ({ selectedState: [..._state.selectedState, newState] })),
  })
);
