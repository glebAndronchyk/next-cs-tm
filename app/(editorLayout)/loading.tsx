"use client";
import { AnimatePresence, motion, usePresence } from "framer-motion";

import { getAnimationElements } from "@/app/(editorLayout)/_lib/loading/getAnimationElements";

const EditorLoading = () => {
  return (
    <div className="absolute w-screen h-screen bg-gray-200 flex overflow-hidden">
      <AnimatePresence>
        <TestAnimation />
      </AnimatePresence>
    </div>
  );
};

const TestAnimation = () => {
  const [isPresent, safeToRemove] = usePresence();
  const animationElements = getAnimationElements();
  console.log(isPresent);

  return animationElements.map(({ id, animation, background, delay }) => {
    return (
      <motion.div
        key={id}
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
          if (!isPresent) {
            safeToRemove();
          }
        }}
        className={`relative shrink-0 w-56 h-full ${background} -skew-x-12`}
      />
    );
  });
};

export default EditorLoading;
