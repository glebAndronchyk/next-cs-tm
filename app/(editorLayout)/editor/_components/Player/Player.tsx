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
      <button className='absolute' />
      <div className="flex-between-centered">
        <div className="flex-between-centered gap-2">
          {player.name}
          {true && <div>kits</div>}
        </div>
        <p>${player.money}</p>
      </div>
      <div className="flex-between-centered">
        <div className="flex-between-centered gap-2">
          <div>pw</div>
          <div>sw</div>
        </div>
        <div>nades</div>
      </div>
    </motion.li>
  );
};

export default Player;
