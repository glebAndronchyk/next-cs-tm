import { ReactNode } from "react";
import {
  AnimationProps,
} from "framer-motion";

export type TriangleClip = "tr" | "tl" | "br" | "bl";

export interface AnimatedTriangleNotifyProps {
  children: ReactNode;
  clip: TriangleClip;
  className?: string;
  animation?: AnimationProps;
}
