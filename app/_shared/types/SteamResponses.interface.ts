import { ESteamSuccess } from "@/app/_shared/enums/ESteamSuccess";

export interface SteamSuccess {
  steamid: string;
  success: ESteamSuccess.FOUND;
}

export interface SteamNoMatch {
  message: "No match";
  success: ESteamSuccess.NO_MATCH;
}
