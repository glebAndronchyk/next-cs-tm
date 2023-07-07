import { getSteamVanityUrl } from "@/app/_shared/lib/steam/getSteamVanityUrl";

export const transformSteamInputString = (input: string): string => {
  if (input.startsWith("https://")) {
    return getSteamVanityUrl(input);
  }

  return input;
};
