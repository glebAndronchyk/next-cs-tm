import {
  EditorPageSliceInitial,
  SelectorCTPlayer,
  SelectorTPlayer,
  TacticMapObject,
} from "@/app/_shared/redux/slices/editor/types/page.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EGameSides } from "@/app/_shared/enums/EGameSides";
import {
  defaultCTPlayer,
  defaultTPlayer,
} from "@/app/_shared/constants/defaultPlayers";
import {
  SetColorActionPayload,
  SetWeaponActionPayload,
} from "@/app/_shared/redux/slices/editor/types/pageActions.types";
import { getRandomAvailableColor } from "@/app/_shared/redux/slices/editor/utils/getRandomAvailableColor";

const initialState: EditorPageSliceInitial = {
  name: "Tactic",
  selectors: {
    ct: {
      players: [
        {
          ...defaultCTPlayer,
        },
      ],
      totals: null,
    },
    t: {
      players: [
        {
          ...defaultTPlayer,
        },
      ],
      totals: null,
    },
  },
  map: null,
  error: null,
  isShowAddButton: false,
  isChanged: false,
  team: null,
};

const editorPageSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    pickMap: (store, action: PayloadAction<TacticMapObject>) => {
      store.map = action.payload;
      store.isShowAddButton = true;
    },
    pickSide: (store, action: PayloadAction<EGameSides>) => {
      store.team = action.payload;
      const team = store.team;

      store.selectors[team].players[0].color = getRandomAvailableColor();
    },
    addNewPlayer: (store, action: PayloadAction<EGameSides>) => {
      const selector = action.payload;
      const isCT = selector === EGameSides.COUNTER_TERRORISTS;
      const player: SelectorTPlayer | SelectorCTPlayer = isCT
        ? { ...defaultCTPlayer }
        : { ...defaultTPlayer };
      if (selector === store.team) {
        player.color = getRandomAvailableColor();
      }

      store.selectors[selector].players.push(player as any);
    },
    setWeapon: (store, action: PayloadAction<SetWeaponActionPayload>) => {
      const { weapon, player } = action.payload;
      const { sideSelector, id } = player;
      const playerIndex = id - 1;

      store.selectors[sideSelector].players[playerIndex][weapon.type] =
        weapon.item;
    },
    setColor: (store, action: PayloadAction<SetColorActionPayload>) => {
      const { player, color } = action.payload;
      const { sideSelector, id } = player;
      const playerIndex = id - 1;

      store.selectors[sideSelector].players[playerIndex].color = color;
    },
    // setGrenade: (store, action: PayloadAction<SetGrenadePayload>) => {
    //   const { player, grenade } = action.payload;
    //   const { sideSelector, id } = player;
    //   const playerIndex = id - 1;
    //
    //   store.selectors[sideSelector].players[playerIndex].utility[grenade]++;
    //   store.selectors[sideSelector].players[playerIndex].utility.total++;
    // },
  },
});

export const pageState = {
  actions: editorPageSlice.actions,
  reducer: editorPageSlice.reducer,
};
