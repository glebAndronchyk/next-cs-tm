import { AllPrimaryWeapons } from "@/app/_shared/types/weaponTypes/SidesPrimaryWeapons.types";
import { EPistols } from "@/app/_shared/enums/EWeapons";
import { WeaponType } from "@/app/_shared/types/weaponTypes/WeaponType.type";
import { PlayerColor } from "@/app/_shared/types/PlayerColor.type";
import { EGameSides } from "@/app/_shared/enums/EGameSides";
import { EGrenades } from "@/app/_shared/enums/EGrenades";

export interface PayloadPlayer {
  id: number;
  sideSelector: EGameSides;
}

export interface SetterPayloadBase {
  player: PayloadPlayer;
}

export interface SetWeaponActionPayload extends SetterPayloadBase {
  weapon: {
    type: WeaponType;
    item: AllPrimaryWeapons & EPistols;
  };
}

export interface SetColorActionPayload extends SetterPayloadBase {
  color: PlayerColor;
}

export interface SetGrenadePayload extends SetterPayloadBase {
  grenade: EGrenades;
}
