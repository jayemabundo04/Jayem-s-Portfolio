import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "inverseOutline";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank";
  rel?: string;
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-ink bg-ink text-white hover:-translate-y-0.5 hover:bg-moss focus-visible:outline-ink",
  secondary:
    "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-moss hover:text-moss focus-visible:outline-moss",
  ghost:
    "border-transparent bg-transparent text-ink hover:bg-white hover:text-moss focus-visible:outline-moss",
  inverse:
    "border-white bg-white text-ink hover:-translate-y-0.5 hover:bg-paper hover:text-moss focus-visible:outline-white",
  inverseOutline:
    "border-white/60 bg-ink/20 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-white"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ariaLabel
}: ButtonLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className
      )}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
}
