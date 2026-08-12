"use client";

import Link from "next/link";
import { useState } from "react";

import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "h-0.5 w-full rounded bg-current transition",
              isOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-full rounded bg-current transition",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-full rounded bg-current transition",
              isOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          className="absolute inset-x-4 top-20 z-50 rounded-lg border border-line bg-white p-4 shadow-soft"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigationItems.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-medium text-ink transition hover:bg-paper hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex gap-2 border-t border-line pt-4">
            {socialLinks.map((link) => (
              <Link
                className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
