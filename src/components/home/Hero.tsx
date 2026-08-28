import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { socialLinks } from "@/data/social-links";

const stackItems = ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-ink">
      <Image
        alt="A modern developer workspace with interface designs, code, and wireframe sketches"
        className="-z-20 object-cover object-[68%_center] sm:object-center"
        fill
        priority
        sizes="100vw"
        src="/images/portfolio-hero.png"
      />
      <div className="absolute inset-0 -z-10 bg-ink/75" aria-hidden="true" />

      <div className="mx-auto grid min-h-[36rem] w-full max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 lg:px-8 lg:py-20">
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase text-emerald-200">
      Web Developer & UI/UX Designer
    </p>

    <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
      Jay-Em Abundo builds clean, practical web experiences.
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
      I create responsive interfaces and full-stack application foundations
      with a focus on usability, maintainable code, and clear product thinking.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <ButtonLink href="#work-preview" variant="inverse">
        View My Work
      </ButtonLink>

      <ButtonLink href="#contact-preview" variant="inverseOutline">
        Contact Me
      </ButtonLink>

      <ButtonLink href="/resume/resume.pdf" variant="inverseOutline">
        Resume
      </ButtonLink>
    </div>

    <div
      className="mt-8 flex flex-wrap gap-2"
      aria-label="Current technology focus"
    >
      {stackItems.map((item) => (
        <span
          className="rounded-md border border-white/25 bg-ink/30 px-3 py-2 text-sm font-medium text-white"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>

    <div className="mt-8 flex gap-4">
      {socialLinks.map((link) => (
        <Link
          className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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

  <div className="flex justify-center lg:justify-end">
    <div
      className="
        group
        relative
        aspect-[4/5]
        w-full
        max-w-[320px]
        overflow-hidden
        rounded-2xl
        border-2
        border-white/80
        bg-ink
        shadow-2xl
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      <Image
        src="/images/profile.jpg"
        alt="Portrait of Jay-Em Abundo"
        fill
        sizes="(max-width: 1024px) 320px, 320px"
        className="
          object-cover
          object-top
          transition-transform
          duration-500
          ease-out
          group-hover:scale-105
          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      />
    </div>
  </div>
</div>
    </section>
  );
}
