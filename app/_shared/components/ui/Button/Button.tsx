"use client";

import { motion } from "framer-motion";
import { ButtonProps } from "@/app/_shared/components/ui/Button/button.types";
import { buttonSizeConfig } from "@/app/_shared/components/ui/Button/buttonSize.config";

const Button = ({
  text,
  leftIcon,
  rightIcon,
  size = "lg",
  className,
  onClick,
}: ButtonProps) => {
  const buttonClassName = `rounded-lg bg-primary-orange ${buttonSizeConfig[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className={buttonClassName}
      onClick={onClick}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {text}
      {rightIcon && <span>{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;
