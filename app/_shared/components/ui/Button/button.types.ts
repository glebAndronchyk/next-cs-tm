import { MouseEventHandler, ReactNode } from "react";
import { Tailwind } from "tailwindest/dist/types/tailwind";
import { Tailwindest } from "tailwindest";

export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps {
  text: string | number;
  onClick: MouseEventHandler;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  size?: ButtonSizes;
}
