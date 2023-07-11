"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/app/_shared/hooks/useAppSelector";
import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";

import AnimationItem from "@/app/_shared/components/animations/EditorLoadingAnimation/AnimationItem";
import { getAnimationElements } from "@/app/_shared/lib/loading/getAnimationElements";
import { SyncLoader } from "react-spinners";
import LoadingSpinner from "@/app/_shared/components/ui/LoadingSpinner/LoadingSpinner";

const EditorLoading = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isPresented, isAnimatedOnEnter, parentDisplay } = useAppSelector(
    (state) => state.editor.loading
  );

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
                {...rest}
              />
            )}
          </AnimatePresence>
        );
      })}
      <LoadingSpinner isShown={isAnimatedOnEnter} />
    </div>
  );
};

export default EditorLoading;
