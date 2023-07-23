import { MouseEventHandler, ReactNode } from "react";

export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps {
  text: string | number;
  onClick: MouseEventHandler;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  size?: ButtonSizes;
}
