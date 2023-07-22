import { motion } from "framer-motion";

import Button from "@/app/_shared/components/ui/Button/Button";
import { store } from "@/app/_shared/redux/store";
import { pickSide } from "@/app/_shared/redux/slices/editor";
import { EGameSides } from "@/app/_shared/enums/gameEnums";

const LockedCardView = ({
  title,
  side,
}: {
  title: string;
  side: EGameSides;
}) => {
  const pick = () => {
    store.dispatch(pickSide(side));
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full w-full absolute bg-gray-200 bg-opacity-80 flex-centered flex-col"
    >
      <p className="mb-4 text-2xl font-medium">{title}</p>
      <Button onClick={pick} text="Pick" className="tracking-wider px-20" />
    </motion.div>
  );
};

export default LockedCardView;
