import {
  SelectorPlayerBase,
  SelectorTPlayer,
  SelectorCTPlayer,
} from "@/app/_shared/redux/slices/editor/types/page.types";
import { EArmor } from "@/app/_shared/enums/EArmor";
import { EOnSideColor } from "@/app/_shared/enums/EPlayerColor";
import { EPistols } from "@/app/_shared/enums/EWeapons";
import { defaultGrenades } from "@/app/_shared/constants/defaultGrenades";

type DefaultSelectorOmit = "secondary" | "color" | "defKits" | "utility";
const defaultSelectorPlayer: Omit<SelectorPlayerBase, DefaultSelectorOmit> = {
  armor: EArmor.NONE,
  avatar: "avatar", // TODO: ADD AVATAR LINK
  id: 1,
  money: 800,
  name: "Player",
  primary: null,
};

export const defaultTPlayer: SelectorTPlayer = {
  ...defaultSelectorPlayer,
  color: EOnSideColor.T,
  secondary: EPistols.GLOCK,
  utility: {
    ...defaultGrenades,
    molotov: 0,
  },
};

export const defaultCTPlayer: SelectorCTPlayer = {
  ...defaultSelectorPlayer,
  color: EOnSideColor.CT,
  secondary: EPistols.USP,
  utility: {
    ...defaultGrenades,
    incendiary: 0,
  },
  defKits: false,
};
