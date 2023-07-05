import {
  SteamNoMatch,
  SteamSuccess,
} from "@/app/(shared)/_interfaces/SteamResponses";

export type SteamPlayerResponseType = {
  response: SteamSuccess | SteamNoMatch;
};
