import axios from "axios";

import { SteamPlayerResponseType } from "@/app/_shared/types/SteamPlayerResponse.type";

export const getPlayerSteamId = async (
  vanityURL: string
): Promise<SteamPlayerResponseType["response"]> => {
  const routeResponse = await axios.get<SteamPlayerResponseType>(
    `api/player/${vanityURL}`
  );

  return routeResponse.data.response;
};
