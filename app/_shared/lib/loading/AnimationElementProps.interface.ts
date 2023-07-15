import { TransitionAnimationValues } from "@/app/_shared/types/animation/TransitionAnimationValues";

export interface AnimationElementProps {
  id: number;
  background: string;
  animation: {
    initial: TransitionAnimationValues;
    animate: TransitionAnimationValues;
  };
  delay: number;
}
