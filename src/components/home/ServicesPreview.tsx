const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build responsive websites and web applications with clean interfaces, reusable components, and modern technologies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "I develop complete web solutions with frontend interfaces, backend logic, databases, authentication, and APIs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "I turn business requirements into practical digital solutions that improve workflows and make everyday tasks easier.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
];

export function ServicesPreview() {
  return (
    <section
      id="what-i-do"
      aria-labelledby="what-i-do-title"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#070a12] pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
      {/* Soft Christmas Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[15%] top-1/2 h-40 w-40 rounded-full bg-emerald-500/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[15%] top-1/3 h-40 w-40 rounded-full bg-red-500/[0.04] blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Transition title centered between the technologies and services sections */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="what-i-do-title"
            className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl"
          >
            Building solutions from idea to execution.
          </h2>
        </div>

        {/* What I Do heading */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-400/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-400">
              What I Do
            </p>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
            I combine development, technical problem solving, and practical
            thinking to build web solutions that work for real users.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.04]"
            >
              {/* Card glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                {/* Icon + Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/[0.08] text-violet-400 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.12]">
                    {service.icon}
                  </div>

                  <span className="text-[10px] font-medium tracking-[0.2em] text-slate-600">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-lg font-semibold tracking-[-0.015em] text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-white/[0.06]" />

                {/* Footer */}
                <div className="mt-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-violet-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                  Available for projects
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
