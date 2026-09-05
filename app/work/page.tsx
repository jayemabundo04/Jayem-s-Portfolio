import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Jay Em Abundo",
  description:
    "A closer look at my professional experience, websites, systems, e-commerce work, and internal tools.",
};

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects & Tasks" },
  { value: "3", label: "Main Focus Areas" },
];

export default function WorkPage() {
  return (
    <main>
      <section
        className="work-hero"
        aria-labelledby="work-experience-title"
      >
        <div className="work-hero__overlay" aria-hidden="true" />
        <div className="work-hero__grid" aria-hidden="true" />

        <div className="work-hero__content">
          <header className="work-hero__header">
            <p className="work-hero__eyebrow">01 / 02 &nbsp; WORK EXPERIENCE</p>

            <h1 id="work-experience-title" className="work-hero__title">
              <span>Real Experience.</span>
              <span>Real Work.</span>
            </h1>

            <p className="work-hero__description">
              A closer look at the websites, systems, and digital work I&apos;ve
              handled — from e-commerce to internal tools.
            </p>
          </header>

          <div className="work-hero__stats" aria-label="Work experience highlights">
            {stats.map((stat) => (
              <div className="work-stat" key={stat.label}>
                <strong className="work-stat__value">{stat.value}</strong>
                <span className="work-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
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
          <span>REPEAT</span>
          <i />
        </div>

        <div className="work-hero__visual" aria-hidden="true">
          <div className="work-hero__screen">
            <div className="work-hero__screen-top">
              <span>SKYWORTH</span>
              <span className="work-hero__screen-nav">TV &nbsp;&nbsp; AUDIO &nbsp;&nbsp; HOME APPLIANCES &nbsp;&nbsp; SUPPORT &nbsp;&nbsp; ABOUT</span>
            </div>
            <div className="work-hero__screen-body" />
          </div>
        </div>
      </section>
    </main>
  );
}
