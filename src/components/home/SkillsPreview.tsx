import Image from "next/image";

import { skills } from "@/data/skills";

export function SkillsPreview() {
  return (
    <section
      aria-label="Technologies and tools"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#070a12] py-10 sm:py-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Small label */}
        <div className="mb-10 px -40 text-center sm:px-8 lg:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Technologies I Work With
          </p>
        </div>

        {/* Carousel viewport */}
       {/* Carousel viewport */}
<div className="relative overflow-hidden">
  {/* Left fade */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#070a12] to-transparent sm:w-28"
  />

  {/* Right fade */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#070a12] to-transparent sm:w-28"
  />

  {/* Center spotlight / flashlight */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-40 -translate-x-1/2 bg-gradient-to-b from-white/20 via-violet-400/20 to-transparent blur-2xl sm:w-56"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl sm:h-36 sm:w-36"
  />

  {/* Moving track */}
  <div className="tech-marquee-track flex w-max">
    <SkillGroup group="primary" />
    <SkillGroup group="duplicate" ariaHidden />
  </div>
</div>
      </div>
    </section>
  );
}

type SkillGroupProps = {
  group: string;
  ariaHidden?: boolean;
};

function SkillGroup({
  group,
  ariaHidden = false,
}: SkillGroupProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
    >
      {skills.map((skill) => (
        <div
          key={`${group}-${skill.id}`}
          className="group flex h-[126px] w-[126px] shrink-0 flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.045] sm:h-[138px] sm:w-[138px]"
        >
          {/* Icon */}
          <div className="relative flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
            <Image
              src={skill.icon}
              alt=""
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>

          {/* Technology */}
          <p className="mt-4 w-full truncate text-center text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
}