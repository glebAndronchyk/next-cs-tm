import { EHeavy, ERifles, ESMGs } from "@/app/_shared/enums/gameEnums";

export type BothSidesRifles = ERifles.AWP | ERifles.SSG;
export type BothSidesSMGs = ESMGs.P90 | ESMGs.BIZON | ESMGs.UMP | ESMGs.MP7;
export type BothSidesHeavy =
  | EHeavy.NEGEV
  | EHeavy.M249
  | EHeavy.XM
  | EHeavy.NOVA;
export type BothSidesPrimary = BothSidesRifles & BothSidesSMGs & BothSidesHeavy;
export type RiflesT =
  | ERifles.AK
  | ERifles.GALIL
  | ERifles.SG553
  | ERifles.G3SG1;
export type RiflesCT =
  | ERifles.FAMAS
  | ERifles.AUG
  | ERifles.SCAR
  | ERifles.M4A1s
  | ERifles.M4A4;
export type SMGsT = ESMGs.MAC10;
export type SMGsCT = ESMGs.MP9 | ESMGs.MP5;
export type HeavyT = EHeavy.SAWED_OFF;
export type HeavyCT = EHeavy.MAG7;

export type OnlyTPrimary = RiflesT & SMGsT & HeavyT;
export type OnlyCTPrimary = RiflesCT & SMGsCT & HeavyCT;

export type AllPrimaryWeapons = BothSidesPrimary & OnlyTPrimary & OnlyCTPrimary;

export type TPrimaryWeapons = BothSidesPrimary | OnlyTPrimary;
export type CTPrimaryWeapons = BothSidesPrimary | OnlyCTPrimary;
