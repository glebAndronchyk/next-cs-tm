import { ReactNode } from "react";
import { MetricsTailwind } from "@/app/_shared/types/MetricsTailwind.interface";

interface SkewNotifyProps {
  children: ReactNode;
  className: string;
  width?: MetricsTailwind["width"];
}

const SkewNotify = ({
  children,
  className,
  width = "w-auto",
}: SkewNotifyProps) => {
  const skewNotifyClassName = `uppercase bg-blue-400 -skew-x-[20deg] py-1 px-5 text-center text-primary-orange font-bold ${className} ${width}`;

  return <div className={skewNotifyClassName}>{children}</div>;
};

export default SkewNotify;
