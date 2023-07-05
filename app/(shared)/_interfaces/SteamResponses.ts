import { SteamSuccessEnum } from "@/app/(shared)/_enums/SteamSuccessEnum";

export interface SteamSuccess {
  steamid: string;
  success: SteamSuccessEnum.FOUND;
}

export interface SteamNoMatch {
  message: "No match";
  success: SteamSuccessEnum.NO_MATCH;
}
