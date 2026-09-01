"use client";

import { useEffect, useState } from "react";
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
  const codeLines = [
  'const developer = {',
  '  name: "Jose Martin C. Abundo Jr.",',
  '  role: "Web Developer",',
  '  passion: "Building solutions",',
  '  focus: "Clean Code & Best Practices"',
  '}',
];

const [lineIndex, setLineIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentLine = codeLines[lineIndex];

  if (!deleting) {
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timer);
    }

    if (lineIndex < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 150);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDeleting(true);
    }, 1800);

    return () => clearTimeout(timer);
  }

  if (charIndex > 0) {
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev - 1);
    }, 20);

    return () => clearTimeout(timer);
  }

  if (lineIndex > 0) {
    const timer = setTimeout(() => {
      setLineIndex((prev) => prev - 1);
      setCharIndex(codeLines[lineIndex - 1].length);
    }, 50);

    return () => clearTimeout(timer);
  }

  const timer = setTimeout(() => {
    setDeleting(false);
  }, 500);

  return () => clearTimeout(timer);
}, [charIndex, deleting, lineIndex]);
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-white/5 bg-[#05070d] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
  <Image
    src="/images/hero.png"
    alt=""
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-[#05070d]/75" />
</div>

      {/* Main */}
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-10 lg:py-16">
        {/* LEFT SIDE */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-base font-medium text-violet-400 sm:text-lg">
            Hi, I&apos;m
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
  <span className="hero-name">
    Jose Martin C.{" "}
  </span>

  <span className="hero-name hero-name-delay bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
    Abundo Jr.
  </span>
</h1>

          <p className="mt-5 text-lg font-medium text-slate-300 sm:text-xl">
            Web Developer{" "}
            <span className="text-slate-600">|</span> Problem Solver{" "}
            <span className="text-slate-600">|</span> Full Stack Developer
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            I build clean, responsive, and user-friendly web applications that
            solve real-world problems and create meaningful impact.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink
              href="#work-preview"
              variant="inverse"
              className="border-0 bg-gradient-to-r from-indigo-500 to-violet-600 px-7 text-white shadow-[0_12px_35px_rgba(99,102,241,0.22)] hover:from-indigo-400 hover:to-violet-500"
            >
              View My Work
              <span aria-hidden="true" className="ml-3 text-base">
                →
              </span>
            </ButtonLink>

            <ButtonLink
              href="#contact-preview"
              variant="inverseOutline"
              className="border-violet-500/70 bg-transparent px-7 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10"
            >
              Get In Touch
              <span aria-hidden="true" className="ml-3">
                ▣
              </span>
            </ButtonLink>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label === "GitHub" ? "◉" : "in"}
              </Link>
            ))}

            <a
              href="mailto:contact@jayemabundo.dev"
              aria-label="Email Jose Martin"
              className="flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              ✉
            </a>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
           {stats.map((stat) => (
  <div
    key={stat.label}
    className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3">
      <div className="flex shrink-0 items-center justify-center">
  <Image
    src={stat.icon}
    alt=""
    width={40}
    height={40}
    className="object-contain"
  />
</div>

      <div>
        <p className="text-lg font-semibold text-white">
          {stat.value}
        </p>

        <p className="mt-1 text-[11px] leading-4 text-slate-500">
          {stat.label}
        </p>
      </div>
    </div>
  </div>
))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[36rem]">
          {/* Glow */}
          <div
            className="absolute h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-violet-700/70 via-indigo-600/60 to-blue-500/20 blur-2xl"
            aria-hidden="true"
          />

          {/* Circle */}
          <div
            className="absolute h-[19rem] w-[19rem] rounded-full border border-violet-400/15 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.10),transparent_40%),linear-gradient(135deg,rgba(68,44,177,0.75),rgba(40,76,180,0.38))] shadow-[0_0_90px_rgba(92,67,255,0.22)]"
            aria-hidden="true"
          />

          {/* Profile */}
          <div className="relative z-10 mt-4 h-[32rem] w-full max-w-[27rem]">
            <Image
              src="/images/icon/profile.png"
              alt="Portrait of Jose Martin C. Abundo Jr."
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 27rem"
              className="object-contain object-bottom"
            />
          </div>

          {/* Code Card */}
          <div className="absolute bottom-2 right-0 z-20 hidden w-[17rem] rounded-lg border border-white/10 bg-[#0b0f18]/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:bottom-10">
            <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2 font-mono text-[10px] text-slate-400">
              <span>
                const developer = {"{"}
              </span>

              <span aria-hidden="true">⌗</span>
            </div>

            <div className="pt-2 font-mono text-[9px] leading-5 text-slate-300">
  {codeLines.map((line, index) => {
    let text = "";

    if (index < lineIndex) {
      text = line;
    } else if (index === lineIndex) {
      text = line.slice(0, charIndex);
    }

    return (
      <p key={index}>
        {text}

        {index === lineIndex && (
          <span className="ml-0.5 inline-block h-3 w-[1px] animate-pulse bg-violet-300 align-middle" />
        )}
      </p>
    );
  })}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}