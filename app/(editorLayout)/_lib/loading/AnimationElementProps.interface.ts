import {
  BLAnimationValues,
  TRAnimationValues,
} from "@/app/_shared/interfaces/AnimationInterfaces";

export interface AnimationElementProps {
  id: number;
  background: string;
  animation: {
    initial: AnimationValuesType;
    animate: AnimationValuesType;
  };
  delay: number;
}

type AnimationValuesType = BLAnimationValues | TRAnimationValues;
