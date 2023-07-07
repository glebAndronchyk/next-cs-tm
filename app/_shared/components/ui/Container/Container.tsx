import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  element?: "div" | "main" | "section" | "article";
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
