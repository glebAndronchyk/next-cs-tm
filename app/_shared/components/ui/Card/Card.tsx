import { MouseEventHandler, ReactNode } from "react";

import Link from "next/link";
import { UrlObject } from "url";

type CardProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  asLink?: boolean;
  href?: string | UrlObject;
};

const Card = ({ className, onClick, children, asLink, href }: CardProps) => {
  const cardClassName = `p-4 w-20 h-20 ${className}`;

  if (asLink && href) {
    return (
      <Link href={href} className={`block ${cardClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={cardClassName}>
      {children}
    </div>
  );
};

export default Card;
