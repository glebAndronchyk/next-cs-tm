import {
  SteamNoMatch,
  SteamSuccess,
} from "@/app/_shared/interfaces/SteamResponses.interface";

export type SteamPlayerResponseType = {
  response: SteamSuccess | SteamNoMatch;
};
