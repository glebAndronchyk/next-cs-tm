"use client";

import SkewNotify from "@/app/_shared/components/ui/SkewNotify/SkewNotify";
import Card from "@/app/_shared/components/ui/Card/Card";
import { useAppDispatch } from "@/app/_shared/hooks/useAppDispatch";
import { triggerAnimatePhase } from "@/app/_shared/redux/slices/editorSlice";

const CreateNewCard = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(triggerAnimatePhase());
  };

  return (
    <Card
      onClick={onClick}
      className="flex-centered cursor-pointer relative w-96 h-80 mx-auto rounded-2xl border-2 border-primary-orange p-0 animate-[move-card-bg_15s_linear_infinite] bg-maps-pattern bg-[length:600px_316px] bg-repeat-x"
    >
      <div className="full-blur z-0 rounded-2xl" />
      <div className="absoulte rounded-full w-5 h-72 bg-primary-orange z-10 shadow-md shadow-secondary-orange" />
      <div className="absolute rounded-full w-72 h-5 bg-primary-orange z-10 shadow-md shadow-secondary-orange" />
      <SkewNotify className="cursor-default absolute z-20 top-[-15px] right-[-20px]">
        new
      </SkewNotify>
    </Card>
  );
};

export default CreateNewCard;
