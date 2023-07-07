"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import SearchInput from "@/app/_shared/components/SearchInput/SearchInput";
import { transformSteamInputString } from "@/app/_shared/lib/steam/transformSteamInputString";
import { checkInputIsASteamId } from "@/app/_shared/lib/steam/checkInputIsASteamId";
import { getPlayerSteamId } from "@/app/api/player/[vanityurl]/_client/getPlayerSteamId";

const CsgoStatsPlayerSearch = () => {
  const router = useRouter();

  const onSearch = useCallback(
    async ({ searchString }: FieldValues): Promise<void> => {
      const input = transformSteamInputString(searchString);
      const isSteamId = checkInputIsASteamId(input);

      if (isSteamId) {
        router.push(`https://csgostats.gg/player/${input}`);
      } else {
        const steamIdStatus = await getPlayerSteamId(input);

        if ("steamid" in steamIdStatus) {
          router.push(`https://csgostats.gg/player/${steamIdStatus.steamid}`);
        }
      }
    },
    [router]
  );

  return <SearchInput onSearch={onSearch} />;
};

export default CsgoStatsPlayerSearch;
