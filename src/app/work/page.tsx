import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Explore Jay-Em's professional work experience, web projects, e-commerce work, internal tools, and digital systems.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work Experience | Jay-Em's Portfolio",
    description:
      "A closer look at the websites, systems, e-commerce work, and internal tools handled by Jay-Em.",
    url: "/work",
    type: "website",
  },
};

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects & Tasks" },
  { value: "3", label: "Main Focus Areas" },
];

export default function WorkPage() {
  return (
    <main>
      <section className="work-hero" aria-labelledby="work-title">
        <div className="work-hero__overlay" aria-hidden="true" />
        <div className="work-hero__grid" aria-hidden="true" />

        <div className="work-hero__content">
          <p className="work-hero__eyebrow">
            01 / 02 &nbsp; WORK EXPERIENCE
          </p>

          <h1 id="work-title" className="work-hero__title">
            <span>Real Experience.</span>
            <span>Real Work.</span>
          </h1>

          <p className="work-hero__description">
            A closer look at the websites, systems, and digital work I&apos;ve
            handled — from e-commerce to internal tools.
          </p>

          <div className="work-hero__actions">
            <a href="#work-details" className="work-hero__button">
              Explore My Work
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="work-hero__stats">
            {stats.map((stat) => (
              <div className="work-stat" key={stat.label}>
                <dt className="work-stat__value">{stat.value}</dt>
                <dd className="work-stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="work-hero__signature" aria-hidden="true">
          <span>Same</span>
          <span>Passion</span>
          <span>Bigger</span>
          <span>Purpose</span>
        </div>

        <div className="work-hero__side-note" aria-hidden="true">
          <span>BUILD</span>
          <span>IMPROVE</span>
          <span>OPTIMIZE</span>
          <span>REPEAT</span>
          <i />
        </div>

        <div className="work-hero__visual">
          <img
            src="/images/projects/Work.png"
            alt="Work experience portfolio preview"
            className="work-hero__image"
          />
        </div>
      </section>

      <section id="work-details">
        {/* Work experience sections will go here */}
      </section>
    </main>
  );
}
