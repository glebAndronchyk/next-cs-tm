import {EOnSideColor, EOnTeamColor} from "@/app/_shared/enums/gameEnums";
import { PlayerColor } from "@/app/_shared/types/PlayerColor.type";

export const playerColorConfig: Record<PlayerColor, string> = {
  [EOnTeamColor.YELLOW]: "bg-yellow-teammate border-yellow-teammate",
  [EOnTeamColor.ORANGE]: "bg-orange-teammate border-orange-teammate",
  [EOnTeamColor.BLUE]: "bg-blue-teammate border-blue-teammate",
  [EOnTeamColor.PURPLE]: "bg-purple-teammate border-purple-teammate",
  [EOnTeamColor.GREEN]: "bg-green-teammate border-green-teammate",
  [EOnSideColor.CT]: "bg-blue-50 border-blue-50",
  [EOnSideColor.T]: "bg-primary-orange border-primary-orange",
};
