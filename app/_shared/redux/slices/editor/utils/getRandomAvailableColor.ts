import { EOnTeamColor } from "@/app/_shared/enums/gameEnums";

export const getRandomAvailableColor = (
  availableColors: EOnTeamColor[]
): EOnTeamColor => {
  const rndIndex = Math.floor(availableColors.length * Math.random());
  const rndColor = availableColors[rndIndex];
  availableColors.splice(rndIndex, 1);

  return rndColor;
};
