import { getSteamVanityUrl } from "@/app/(shared)/_lib/getSteamVanityUrl";

export const transformSteamInputString = (input: string): string => {
  if (input.startsWith("https://")) {
    return getSteamVanityUrl(input);
  }

  return input;
};
