import { Hero } from "@/components/home/Hero";

const workPreviewItems = [
  {
    title: "Responsive Frontend Work",
    description:
      "Interfaces built for clear hierarchy, mobile usability, accessible focus states, and maintainable component structure."
  },
  {
    title: "Full-Stack Foundations",
    description:
      "Application architecture planned around server-first rendering, safe data boundaries, validation, and database-backed content."
  },
  {
    title: "UI/UX Thinking",
    description:
      "Layouts and flows designed for decision-making, clarity, and real users instead of decorative portfolio filler."
  }
];

const approachItems = [
  "Start with the user and the workflow before choosing the interface pattern.",
  "Keep components small, typed, and reusable without creating unnecessary abstraction.",
  "Separate static content, validation, server logic, and future database concerns early."
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white py-16" id="work-preview">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-moss">Selected Direction</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">A portfolio built like a real product.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              This first phase establishes the public shell. The next phases will add detailed pages,
              database-backed projects, contact storage, and a protected admin workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {workPreviewItems.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-6" key={item.title}>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16" id="approach">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Approach</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Clean execution over noise.</h2>
          </div>

          <div className="grid gap-4">
            {approachItems.map((item, index) => (
              <div className="rounded-lg border border-line bg-white p-5" key={item}>
                <p className="text-sm font-semibold text-clay">0{index + 1}</p>
                <p className="mt-2 leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="contact-preview">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Open to web, frontend, full-stack, UI/UX, and IT roles.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              The full contact form arrives in Phase 2. For now, GitHub and LinkedIn are available from the header and footer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
