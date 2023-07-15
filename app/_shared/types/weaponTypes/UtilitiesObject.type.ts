import { EGrenades } from "@/app/_shared/enums/EGrenades";

export type AllUtilities = {
  [G in EGrenades]: number;
};

export type UtilitiesT = Omit<AllUtilities, "incendiary">;
export type UtilitiesCT = Omit<AllUtilities, "molotov">;
