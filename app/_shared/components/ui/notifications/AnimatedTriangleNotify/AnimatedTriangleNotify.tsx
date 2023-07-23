import { motion } from "framer-motion";

import { AnimatedTriangleNotifyProps } from "@/app/_shared/components/ui/notifications/AnimatedTriangleNotify/animatedTriangleNotify.types";
import { clipConfig } from "@/app/_shared/components/ui/notifications/AnimatedTriangleNotify/animatedTriangleNotify.config";

const AnimatedTriangleNotify = ({
  children,
  className,
  clip,
  animation,
}: AnimatedTriangleNotifyProps) => {
  const notificationClassName = `${clipConfig[clip]} absolute flex-centered ${className}`;

  return (
    <motion.div {...animation} className={notificationClassName}>
      {children}
    </motion.div>
  );
};

export default AnimatedTriangleNotify;
