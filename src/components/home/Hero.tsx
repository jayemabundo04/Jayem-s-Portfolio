import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { socialLinks } from "@/data/social-links";

const stats = [
  {
    icon: "/images/icon/progcon.png",
    value: "5+",
    label: "Projects Completed",
  },
  {
    icon: "/images/icon/exp.png",
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: "/images/icon/course.png",
    value: "BIT",
    label: "Computer Technology",
  },
  {
    icon: "/images/icon/learn.png",
    value: "Ongoing",
    label: "Always Learning",
  },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/5 bg-[#05070d] text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.98)_0%,rgba(5,7,13,0.9)_35%,rgba(5,7,13,0.62)_65%,rgba(5,7,13,0.82)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,7,13,0.98)_0%,transparent_45%,rgba(5,7,13,0.3)_100%)]" />
      </div>

      {/* Main Container */}
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

          {/* LEFT SIDE */}
          <div className="relative z-10 max-w-3xl">

            {/* Role */}
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.9)]" />

              Junior Web Developer
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.4rem]">
              I build web experiences
              <br className="hidden sm:block" />

              that{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                solve real problems.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              I&apos;m Jose Martin C. Abundo Jr., a Computer Technology
              graduate focused on building clean, responsive, and
              user-friendly web applications.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="#work-preview"
                variant="inverse"
                className="border-0 bg-gradient-to-r from-indigo-500 to-violet-600 px-6 text-white shadow-[0_12px_35px_rgba(99,102,241,0.3)] hover:from-indigo-400 hover:to-violet-500"
              >
                View My Work

                <span
                  aria-hidden="true"
                  className="ml-2"
                >
                  ↗
                </span>
              </ButtonLink>

              <ButtonLink
                href="#contact-preview"
                variant="inverseOutline"
                className="border-white/15 bg-white/[0.03] px-6 text-slate-200 backdrop-blur-sm hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
              >
                Get In Touch

                <span
                  aria-hidden="true"
                  className="ml-2"
                >
                  →
                </span>
              </ButtonLink>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-2 text-[11px] font-semibold text-slate-400 transition hover:border-violet-400/40 hover:text-white"
                >
                  {link.label === "GitHub" ? "GH" : "in"}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-[#0b0f18]/60 px-3 py-3 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2.5">

                    <Image
                      src={stat.icon}
                      alt=""
                      width={34}
                      height={34}
                      className="h-8 w-8 object-contain"
                    />

                    <div>
                      <p className="text-base font-semibold text-white">
                        {stat.value}
                      </p>

                      <p className="mt-0.5 text-[9px] leading-3 text-slate-500">
                        {stat.label}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

       {/* RIGHT SIDE - TECH STACK IMAGE */}
{/* RIGHT SIDE */}
<div className="relative z-10 flex w-full justify-center lg:justify-end">
  <div className="relative w-full max-w-[42rem]">

    {/* Profile Glow */}
    <div
      className="hero-profile-glow absolute left-1/2 top-[-4rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/60 via-indigo-600/40 to-blue-500/20 blur-3xl"
      aria-hidden="true"
    />

    <div
      className="hero-profile-glow absolute left-1/2 top-[-2rem] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-transparent blur-2xl"
      aria-hidden="true"
    />

    {/* Profile */}
    <div className="hero-profile-float relative z-20 mx-auto mb-[-3rem] h-[27rem] w-[22rem] sm:h-[30rem] sm:w-[24rem] -translate-y-8">
  <Image
    src="/images/icon/profile.png"
    alt="Jose Martin C. Abundo Jr."
    fill
    priority
    sizes="(max-width: 1024px) 24rem, 27rem"
    className="object-contain object-bottom"
  />
</div>

    {/* Tech Stack Image */}
    <div className="hero-tech-reveal relative z-10">
      <Image
        src="/images/projects/techus.png"
        alt="Technology stack: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Prisma"
        width={758}
        height={137}
        sizes="(max-width: 1024px) 100vw, 42rem"
        className="h-auto w-full object-contain"
      />
    </div>

  </div>
</div>
</div>
    </div>
  </section>
  );
}
 