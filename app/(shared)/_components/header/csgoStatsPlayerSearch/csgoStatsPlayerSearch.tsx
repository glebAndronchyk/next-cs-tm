"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import SearchInput from "@/app/(shared)/_components/searchInput/searchInput";
import { transformSteamInputString } from "@/app/(shared)/_lib/transformSteamInputString";
import { checkInputIsASteamId } from "@/app/(shared)/_lib/checkInputIsASteamId";
import { getPlayerSteamId } from "@/app/(shared)/api/player/[vanityurl]/_client/getPlayerSteamId";

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
