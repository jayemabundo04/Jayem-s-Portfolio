import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ffffff20] bg-[#0b0d0c]/95 text-[#f4f2e9] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-11">
        <Link className="text-xl font-black tracking-[-0.06em] text-[#f4f2e9] transition hover:text-[#d6ff73]" href="/" aria-label="Jay-Em home">
          JAY—EM<span className="text-[#d6ff73]">.</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationItems.map(item => (
            <Link className="rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[.11em] text-[#aab9ad] transition hover:text-[#d6ff73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d6ff73]" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.slice(0,1).map(link => <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#e7ede4] hover:text-[#d6ff73]">{link.label} ↗</Link>)}
          <Link href="/contact" className="ml-3 rounded-sm bg-[#d6ff73] px-5 py-3 text-xs font-bold text-[#0b0d0c] transition hover:bg-white">Let&apos;s talk ↗</Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
