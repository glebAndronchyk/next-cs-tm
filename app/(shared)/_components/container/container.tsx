import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  element?: "div" | "main" | "section";
}

const Container = ({
  children,
  className = "",
  element = "div",
}: ContainerProps) => {
  const ContainerElement = element;

  return (
    <ContainerElement className={`container mx-auto ${className}`}>
      {children}
    </ContainerElement>
  );
};

export default Container;
