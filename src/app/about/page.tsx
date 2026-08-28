export default function AboutPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-moss">
            Approach
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
            How I approach building digital products.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            I focus on understanding the problem first, then building
            interfaces and systems that are clear, maintainable, and useful.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-clay">01</p>

            <h2 className="mt-3 text-xl font-bold text-ink">
              Understand the Problem
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              I start by understanding the user, the workflow, and the
              problem the system needs to solve.
            </p>
          </article>

          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-clay">02</p>

            <h2 className="mt-3 text-xl font-bold text-ink">
              Build with Structure
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              I keep components organized and separate the interface,
              application logic, and data layer.
            </p>
          </article>

          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-clay">03</p>

            <h2 className="mt-3 text-xl font-bold text-ink">
              Improve Through Testing
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              I test the experience, fix issues, and refine the system
              based on how people actually use it.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-moss">
              Technical Direction
            </p>

            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              From frontend interfaces to database-backed systems.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              My current focus is building with Next.js, TypeScript,
              Tailwind CSS, Prisma, and PostgreSQL while continuing to
              strengthen my frontend and full-stack development skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}