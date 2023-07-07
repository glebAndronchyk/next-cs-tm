export const getSteamVanityUrl = (input: string): string => {
  const regex = /https:\/\/steamcommunity\.com\/(id|profiles)\/([^/]+)/;
  const match = input.match(regex) as RegExpMatchArray;

  return match[2];
};
