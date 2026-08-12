import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="rounded-md text-base font-bold text-ink transition hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
          href="/"
        >
          Jay-Em
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((link) => (
            <Link
              className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
