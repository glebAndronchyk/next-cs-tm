import CheckIcon from "@/app/_shared/components/ui/icons/CheckIcon";
import AnimatedTriangleNotify from "@/app/_shared/components/ui/notifications/AnimatedTriangleNotify/AnimatedTriangleNotify";
import { AnimatePresence } from "framer-motion";
import { EGameSides } from "@/app/_shared/enums/gameEnums";
import { useEffect, useState } from "react";

const TriangleNotify = ({
  side,
  pickedTeam,
}: {
  side: EGameSides;
  pickedTeam: EGameSides | null;
}) => {
  const [isPicked, setIsPicked] = useState(false);

  useEffect(() => {
    const isPickedTeamEqualsSide = pickedTeam === side;
    if (isPickedTeamEqualsSide) {
      setIsPicked(isPickedTeamEqualsSide);
      setTimeout(() => setIsPicked(false), 3000);
    }
  }, [side, pickedTeam]);

  const notifyColor =
    side === EGameSides.COUNTER_TERRORISTS ? "bg-blue-50" : "bg-primary-orange";

  return (
    <AnimatePresence>
      {isPicked && (
        <AnimatedTriangleNotify
          clip="tr"
          animation={{
            initial: { top: "-80px", right: "-64px" },
            animate: {
              top: 0,
              right: 0,
            },
            exit: { top: "-80px", right: "-64px" },
            transition: {
              duration: 0.5,
            },
          }}
          className={`w-20 h-16 bg-green-700 ${notifyColor}`}
        >
          <CheckIcon className="absolute top-2 right-2 w-7 h-7 stroke-blue-400" />
        </AnimatedTriangleNotify>
      )}
    </AnimatePresence>
  );
};

export default TriangleNotify;
