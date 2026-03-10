import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export const Card = ({ children, className = "", href }: CardProps) => {
  const classes =
    `group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
};
