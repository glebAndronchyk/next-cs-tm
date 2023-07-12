"use client";

import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";

import DeclarativeLogo from "@/app/_shared/components/ui/logos/DeclarativeLogo/DeclarativeLogo";
import {
  setRedirectTo,
  triggerAnimatePhase,
} from "@/app/_shared/redux/slices/editorSlice";

const EditorLogo = () => {
  const dispatch = useAppDispatch();

  const onLogoClick = () => {
    dispatch(setRedirectTo("/"));
    dispatch(triggerAnimatePhase());
  };

  return <DeclarativeLogo customOnClick={onLogoClick} />;
};

export default EditorLogo;
