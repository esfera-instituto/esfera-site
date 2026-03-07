import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  meta?: string;
  actionLabel?: string;
  children?: ReactNode;
}

export const Card = ({ title, description, href, meta, actionLabel, children }: CardProps) => {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
    >
      {meta && <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{meta}</p>}
      <h3 className="mt-2 text-lg font-semibold text-marinho">{title}</h3>
      {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      {children}
      {actionLabel && <p className="mt-4 text-sm font-medium text-azul">{actionLabel} →</p>}
    </Wrapper>
  );
};
