
import type { Metadata } from "next";
import Image from "next/image";
import { Timeline } from "@/components/experience/Timeline";

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
    <>
      <section
        className="work-hero"
        aria-labelledby="work-title"
      >
        <div
          className="work-hero__overlay"
          aria-hidden="true"
        />
        <div
          className="work-hero__grid"
          aria-hidden="true"
        />

        <div className="work-hero__content">
          <p className="work-hero__eyebrow">
            01 / 02 &nbsp; WORK EXPERIENCE
          </p>

          <h1
            id="work-title"
            className="work-hero__title"
          >
            <span>Real Experience.</span>
            <span>Real Work.</span>
          </h1>

          <p className="work-hero__description">
            A closer look at the websites, systems, and digital work I&apos;ve
            handled — from e-commerce to internal tools.
          </p>

          <div className="work-hero__actions">
            <a
              href="#work-details"
              className="work-hero__button"
            >
              Explore My Work
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="work-hero__stats">
            {stats.map((stat) => (
              <div
                className="work-stat"
                key={stat.label}
              >
                <dt className="work-stat__value">
                  {stat.value}
                </dt>
                <dd className="work-stat__label">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="work-hero__signature"
          aria-hidden="true"
        >
          <span>Same</span>
          <span>Passion</span>
          <span>Bigger</span>
          <span>Purpose</span>
        </div>

        <div
          className="work-hero__side-note"
          aria-hidden="true"
        >
          <span>BUILD</span>
          <span>IMPROVE</span>
          <span>OPTIMIZE</span>
          <span>REPEAT</span>
          <i />
        </div>
      </section>

      {/* Award & Recognition */}
      <section
        className="award-section"
        aria-labelledby="award-title"
      >
        <div className="award-container">
          <div className="award-content">
            <p className="award-eyebrow">
              ACHIEVEMENT / 2026
            </p>

            <h2
              id="award-title"
              className="award-title"
            >
              Recognition for{" "}
              <span>Excellence.</span>
            </h2>

            <p className="award-description">
              Received 3rd Prize in the Skyworth Global AI
              Competition under the Marketing Track for the
              Philippines Branch Retail System project.
            </p>

            <div className="award-details">
              <span>3rd Place Winner</span>
              <span>AI Competition</span>
              <span>August 28, 2026</span>
            </div>

            <p className="award-project">
              Project: Philippines Branch Retail System
            </p>
          </div>

          <figure className="award-image-wrapper">
            <Image
              src="/images/projects/competition.jpg"
              alt="Certificate of Recognition for winning 3rd Prize in the Skyworth Global AI Competition Marketing Track"
              width={1450}
              height={1024}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="award-image"
            />

            <figcaption>
              Official Certificate of Recognition · Skyworth Philippines
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section
        id="work-details"
        className="work-details"
        aria-labelledby="experience-timeline-title"
      >
        <Timeline />
      </section>
    </>
  );
}
