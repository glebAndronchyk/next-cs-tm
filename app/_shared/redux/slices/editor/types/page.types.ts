import { ErrorObject } from "@/app/_shared/types/ErrorObject.type";
import {
  CTPrimaryWeapons,
  TPrimaryWeapons,
} from "@/app/_shared/types/weaponTypes/SidesPrimaryWeapons.types";
import {
  CTSecondaryWeapons,
  TSecondaryWeapons,
} from "@/app/_shared/types/weaponTypes/SidesSecondaryWepons.types";
import {
  UtilitiesCT,
  UtilitiesT,
} from "@/app/_shared/types/weaponTypes/UtilitiesObject.type";
import { Coordinates2D } from "@/app/_shared/types/Coordinates2D.type";
import { PlayerColor } from "@/app/_shared/types/PlayerColor.type";

import { EGameSides, EArmor } from "@/app/_shared/enums/gameEnums";

export interface EditorPageSliceInitial {
  name: string;
  team: EGameSides | null;
  map: TacticMapObject | null;
  error: ErrorObject | null | string;
  isShowAddButton: boolean;
  isChanged: boolean;
  selectors: {
    ct: SelectorBlock<SelectorCTPlayer>;
    t: SelectorBlock<SelectorTPlayer>;
  };
}

export interface TacticMapObject {
  screens: MapScreen[];
}

export interface SelectorBlock<
  PlayerWithSide extends SelectorCTPlayer | SelectorTPlayer
> {
  players: PlayerWithSide[];
  totals: TotalsObject | null;
}

export interface MapScreen {
  // name: EMapsName;
  playersDots: PlayerOnMap[];
  grenades: MapGrenades;
  arrows: Arrow[];
}

export interface PlayerOnMap extends Pick<SelectorPlayerBase, "color" | "id"> {
  position: Coordinates2D;
}

export type MapGrenadesKeys = "smokes" | "flashes" | "decoys" | "fires" | "hes";
export type MapGrenades = {
  [K in MapGrenadesKeys]: Coordinates2D;
};

export interface Arrow {
  from: Coordinates2D;
  to: Coordinates2D;
}

export interface TotalsObject {
  total: number;
  weapons: number;
  utility: number;
}

export interface SelectorPlayerBase {
  id: number;
  armor: EArmor;
  avatar: string;
  color: PlayerColor;
  defKits: boolean;
  money: number;
  name: string;
  primary: CTPrimaryWeapons | TPrimaryWeapons | null;
  secondary: CTSecondaryWeapons | TSecondaryWeapons | null;
  utility: UtilitiesCT | UtilitiesT;
}

export interface SelectorCTPlayer extends SelectorPlayerBase {
  primary: CTPrimaryWeapons | null;
  secondary: CTSecondaryWeapons;
  utility: UtilitiesCT;
}

export interface SelectorTPlayer extends Omit<SelectorPlayerBase, "defKits"> {
  primary: TPrimaryWeapons | null;
  secondary: TSecondaryWeapons;
  utility: UtilitiesT;
}
