"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

import logo from "@/public/images/cs2-logo.png";
import { useRouter } from "next/navigation";

interface DeclarativeLogoProps {
  className: string;
  customOnClick?: MouseEventHandler<HTMLElement>;
}

const DeclarativeLogo = ({
  customOnClick,
  className,
}: DeclarativeLogoProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <h1
      onClick={customOnClick || onClick}
      className={`cursor-pointer w-[160px] ${className}`}
    >
      <Image priority src={logo} alt="logo" width={160} height={16} />
    </h1>
  );
};

export default DeclarativeLogo;
