import { motion } from "framer-motion";

import { AnimationElementProps } from "@/app/_shared/lib/loading/AnimationElementProps.interface";
import {
  resetEditor,
  triggerAnimatePhaseEnd,
  triggerAnimationEnd,
} from "@/app/_shared/redux/slices/editor";
import { AppDispatch } from "@/app/_shared/redux/store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface AnimationItemProps extends Omit<AnimationElementProps, "id"> {
  dispatch: AppDispatch;
  router: AppRouterInstance;
  isLast: boolean;
  alreadyAnimated: boolean;
  redirectTo: string;
}

const AnimationItem = ({
  animation,
  delay,
  background,
  isLast,
  dispatch,
  router,
  alreadyAnimated,
  redirectTo,
}: AnimationItemProps) => {
  return (
    <motion.div
      initial={{
        ...animation.initial,
      }}
      animate={{
        ...animation.animate,
      }}
      exit={{
        ...animation.initial,
      }}
      transition={{
        ease: "linear",
        delay,
      }}
      onAnimationComplete={() => {
        if (isLast && alreadyAnimated) {
          dispatch(triggerAnimationEnd());
          dispatch(resetEditor());
        }
        if (isLast) {
          dispatch(triggerAnimatePhaseEnd());
          router.push(redirectTo);
        }
      }}
      className={`relative lg:w-48 xl:w-56 2xl:w-64 shrink-0 h-full ${background} -skew-x-12`}
    />
  );
};

export default AnimationItem;
