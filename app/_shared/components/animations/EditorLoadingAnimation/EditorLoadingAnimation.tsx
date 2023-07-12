"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/app/_shared/hooks/useAppSelector";
import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";

import AnimationItem from "@/app/_shared/components/animations/EditorLoadingAnimation/AnimationItem";
import { getAnimationElements } from "@/app/_shared/lib/loading/getAnimationElements";

const EditorLoadingAnimation = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isPresented, isAnimatedOnEnter, parentDisplay, redirectTo } =
    useAppSelector((state) => state.editor.loading);

  const animationItems = getAnimationElements();

  return (
    <div
      className={`${parentDisplay} absolute z-20 w-screen h-screen overflow-hidden`}
    >
      {animationItems.map(({ id, ...rest }) => {
        const isLast = id === animationItems.length - 1;
        return (
          <AnimatePresence key={id}>
            {isPresented && (
              <AnimationItem
                dispatch={dispatch}
                router={router}
                isLast={isLast}
                alreadyAnimated={isAnimatedOnEnter}
                redirectTo={redirectTo}
                {...rest}
              />
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default EditorLoadingAnimation;
