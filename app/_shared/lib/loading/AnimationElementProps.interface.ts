import { TransitionAnimationValues } from "@/app/_shared/interfaces/animation/TransitionAnimationValues";

export interface AnimationElementProps {
  id: number;
  background: string;
  animation: {
    initial: TransitionAnimationValues;
    animate: TransitionAnimationValues;
  };
  delay: number;
}
