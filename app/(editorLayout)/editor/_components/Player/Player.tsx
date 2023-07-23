import { motion } from "framer-motion";

import {
  SelectorCTPlayer,
  SelectorTPlayer,
} from "@/app/_shared/redux/slices/editor/types/page.types";
import { EGameSides } from "@/app/_shared/enums/gameEnums";
import { playerColorConfig } from "@/app/(editorLayout)/editor/_components/Player/player.config";

const Player = ({
  player,
  side,
}: {
  player: SelectorCTPlayer | SelectorTPlayer;
  side: EGameSides;
}) => {
  const playerClassName = `px-2 py-2.5 mb-2 border-2 rounded-md bg-opacity-30 ${
    playerColorConfig[player.color]
  }`;

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={playerClassName}
    >
      {player.name}
    </motion.li>
  );
};

export default Player;
