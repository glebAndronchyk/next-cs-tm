import { EPistols } from "@/app/_shared/enums/gameEnums/EWeapons";

export type BothSidesSecondary =
  | EPistols.CZ75
  | EPistols.DEAGLE
  | EPistols.P250
  | EPistols.R8
  | EPistols.DUAL_BERETTAS;
export type OnlyTSecondary = EPistols.TEC9 | EPistols.GLOCK;
export type OnlyCTSecondary =
  | EPistols.USP
  | EPistols.P2000
  | EPistols.FIVE_SEVEN;

export type TSecondaryWeapons = BothSidesSecondary | OnlyTSecondary;
export type CTSecondaryWeapons = BothSidesSecondary | OnlyCTSecondary;
