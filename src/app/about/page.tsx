export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Stay Motivated",
      accent: "from-violet-400 to-fuchsia-400",
      glow: "group-hover:shadow-violet-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <path d="M38 8c8-3 14-2 18-2 0 4 1 10-2 18L37 41 23 27 38 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="m23 27-10 2-6 10 16-1m14 3-2 10-10 6 1-16" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="43" cy="16" r="4" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M16 43c-7 2-9 9-9 14 5 0 12-2 14-9m-6-2 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      description: "I remind myself why I started, stay focused on my goals, and keep going even when a task gets difficult.",
      detail: "Keep showing up",
    },
    {
      number: "02",
      title: "Continue Learning",
      accent: "from-sky-300 to-blue-500",
      glow: "group-hover:shadow-blue-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <path d="M8 14c10-4 18-2 24 4v36c-6-6-14-8-24-4V14Zm48 0c-10-4-18-2-24 4v36c6-6 14-8 24-4V14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M15 24c5-1 9 0 12 2m-12 6c5-1 9 0 12 2m22-10c-5-1-9 0-12 2m12 6c-5-1-9 0-12 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="m47 5 2.5 5L55 12l-5.5 2L47 19l-2.5-5L39 12l5.5-2L47 5Z" fill="currentColor"/>
        </svg>
      ),
      description: "I stay curious, explore new tools, and practice what I learn through real projects instead of relying on theory alone.",
      detail: "Learn by building",
    },
    {
      number: "03",
      title: "Be Patient",
      accent: "from-amber-300 to-orange-500",
      glow: "group-hover:shadow-orange-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <path d="M17 8h30M17 56h30M20 9c0 12 4 16 12 23-8 7-12 11-12 23m24-46c0 12-4 16-12 23 8 7 12 11 12 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 15h18c-1 7-4 10-9 14-5-4-8-7-9-14Zm0 34h18c-1-7-4-10-9-14-5 4-8 7-9 14Z" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 42h8l4 5H24l4-5Z" fill="currentColor"/>
        </svg>
      ),
      description: "I understand that progress takes time. I give myself room to make mistakes, improve step by step, and trust the process.",
      detail: "Progress over pressure",
    },
    {
      number: "04",
      title: "Stay Consistent",
      accent: "from-emerald-300 to-teal-500",
      glow: "group-hover:shadow-emerald-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <path d="M12 33a20 20 0 0 1 35-13l5 5m0-12v12H40M52 31a20 20 0 0 1-35 13l-5-5m0 12V39h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m23 32 6 6 13-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Small steps add up. I make time to practice, finish what I start, and build good habits that support long-term growth.",
      detail: "Small steps count",
    },
    {
      number: "05",
      title: "Learn from Mistakes",
      accent: "from-pink-300 to-rose-500",
      glow: "group-hover:shadow-rose-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <path d="M32 8v7m0 34v7M8 32h7m34 0h7M15 15l5 5m24 24 5 5m0-34-5 5M20 44l-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="17" stroke="currentColor" strokeWidth="2.5"/>
          <path d="m24 33 5 5 11-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "When something breaks, I investigate the cause, fix the issue, and use the experience to make my next solution better.",
      detail: "Turn bugs into lessons",
    },
    {
      number: "06",
      title: "Build for People",
      accent: "from-cyan-300 to-teal-400",
      glow: "group-hover:shadow-cyan-500/10",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden="true">
          <circle cx="24" cy="21" r="8" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M8 52v-5c0-8 7-13 16-13s16 5 16 13v5H8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="m42 28 5 5 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44 10h12m-6-6v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      description: "I think about the people using what I create. Clear workflows, accessible interfaces, and practical features matter.",
      detail: "Useful beats complicated",
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070912] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-[8%] h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[34rem] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <span className="h-px w-8 bg-violet-400/60" />
          My Approach
          <span className="h-px w-8 bg-violet-400/60" />
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
          How I Keep <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">Moving Forward</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          The principles I follow as I grow as a developer: stay focused, keep learning, and give progress the time it needs.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.10] bg-white/[0.035] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-2xl ${principle.glow} sm:p-8`}
            >
              <div aria-hidden="true" className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${principle.accent} opacity-[0.07] blur-3xl transition-opacity group-hover:opacity-20`} />
              <div className="relative flex items-start justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${principle.accent} bg-clip-padding text-sm font-semibold text-white shadow-lg`}>
                  {principle.number}
                </span>
                <span className={`bg-gradient-to-br ${principle.accent} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}>
                  {principle.icon}
                </span>
              </div>
              <h2 className={`relative mt-7 text-2xl font-semibold tracking-tight bg-gradient-to-r ${principle.accent} bg-clip-text text-transparent`}>
                {principle.title}
              </h2>
              <p className="relative mt-3 min-h-[5.5rem] text-sm leading-7 text-slate-400 sm:text-base">
                {principle.description}
              </p>
              <div className="relative mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <span className={`h-1 w-10 rounded-full bg-gradient-to-r ${principle.accent}`} />
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{principle.detail}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.10] via-[#101326] to-blue-500/[0.08] p-7 sm:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">A reminder to myself</p>
          <p className="relative mt-4 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-100 sm:text-3xl">
            I don&apos;t need to know everything today. I just need to keep learning, stay patient, and take the next step.
          </p>
          <div className="relative mt-6 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-px w-8 bg-violet-300/60" />
            One step at a time
          </div>
        </div>
      </section>
    </main>
  );
}
