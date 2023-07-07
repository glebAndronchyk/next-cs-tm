import { SteamSuccessEnum } from "@/app/_shared/enums/SteamSuccessEnum";

export interface SteamSuccess {
  steamid: string;
  success: SteamSuccessEnum.FOUND;
}

export interface SteamNoMatch {
  message: "No match";
  success: SteamSuccessEnum.NO_MATCH;
}
