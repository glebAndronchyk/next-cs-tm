"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";
import { useAppSelector } from "@/app/_shared/hooks/useAppSelector";

import {
  resetLoadingAnimationState,
  triggerExitPhase,
} from "@/app/_shared/redux/slices/editorSlice";

const ExitAnimationOnMount = () => {
  const dispatch = useAppDispatch();
  const { isAnimatedOnExit } = useAppSelector((state) => state.editor.loading);

  useEffect(() => {
    if (!isAnimatedOnExit) {
      dispatch(triggerExitPhase());
    }
    if (isAnimatedOnExit) {
      dispatch(resetLoadingAnimationState());
    }
  }, [dispatch, isAnimatedOnExit]);

  return null;
};

export default ExitAnimationOnMount;
