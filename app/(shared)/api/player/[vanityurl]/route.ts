import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { SteamPlayerResponseType } from "@/app/(shared)/_types/SteamPlayerResponse.type";

interface RequestContext {
  params: {
    vanityurl: string;
  };
}

export const GET = async (req: NextRequest, context: RequestContext) => {
  const player = await axios.get<SteamPlayerResponseType>(
    `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/`,
    {
      params: {
        key: process.env.STEAM_WEB_API_KEY,
        vanityurl: context.params.vanityurl,
      },
    }
  );

  return NextResponse.json({ ...player.data });
};
