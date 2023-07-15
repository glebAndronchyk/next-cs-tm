import { AllUtilities } from "@/app/_shared/types/weaponTypes/UtilitiesObject.type";

export const defaultGrenades: Omit<AllUtilities, "molotov" | "incendiary"> = {
  total: 0,
  smoke: 0,
  he: 0,
  decoy: 0,
  flashbang: 0,
};
