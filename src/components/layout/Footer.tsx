import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-base font-bold text-ink">Jay-Em&apos;s Portfolio</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            A focused portfolio for web development, full-stack application work, and UI/UX design.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold text-ink">Pages</p>
          <div className="mt-3 grid gap-2">
            {navigationItems.map((item) => (
              <Link
                className="text-sm text-slate-600 transition hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-sm font-semibold text-ink">Connect</p>
          <div className="mt-3 grid gap-2">
            {socialLinks.map((link) => (
              <Link
                className="text-sm text-slate-600 transition hover:text-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line px-4 py-4 text-center text-sm text-slate-500">
        <p>&copy; {year} Jay-Em. Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
