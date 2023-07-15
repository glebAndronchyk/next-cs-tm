import {
  SteamNoMatch,
  SteamSuccess,
} from "@/app/_shared/types/SteamResponses.interface";

export type SteamPlayerResponseType = {
  response: SteamSuccess | SteamNoMatch;
};
