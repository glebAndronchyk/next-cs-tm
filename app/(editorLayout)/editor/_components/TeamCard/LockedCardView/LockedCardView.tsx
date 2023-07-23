import { AnimatePresence, motion } from "framer-motion";

import Button from "@/app/_shared/components/ui/Button/Button";
import { store } from "@/app/_shared/redux/store";
import { pickSide } from "@/app/_shared/redux/slices/editor";
import { EGameSides } from "@/app/_shared/enums/gameEnums";
import { EFullTeamNamings } from "@/app/_shared/enums/gameEnums/EFullTeamNamings";

const LockedCardView = ({
  side,
  locked,
  title,
}: {
  side: EGameSides;
  locked: boolean;
  title: EFullTeamNamings;
}) => {
  const pick = () => {
    store.dispatch(pickSide(side));
  };

  return (
    <AnimatePresence>
      {locked && (
        <motion.div
          exit={{ opacity: 0 }}
          className="h-full w-full absolute bg-gray-200 bg-opacity-30 flex-centered flex-col"
        >
          <p className="mb-4 text-2xl font-medium">{title}</p>
          <Button onClick={pick} text="Pick" className="tracking-wider px-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LockedCardView;
