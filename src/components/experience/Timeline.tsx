import Image from "next/image";
import Link from "next/link";

type Experience = {
  id: number;
  period: string[];
  duration: string;
  status: string;
  statusType: "current" | "ojt" | "academic";
  company: string;
  companyMark: string;
  role: string;
  location: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    period: ["DEC 2025", "— PRESENT"],
    duration: "9+ months",
    status: "Current",
    statusType: "current",
    company: "Skyworth Philippines",
    companyMark: "SP",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Handles website management, online marketing support, e-commerce content, and internal digital tools. Manages Shopify updates, SEO tasks, and digital initiatives.",
    image: "/images/projects/skyworth.png",
    technologies: [
      "Shopify",
      "Node.js",
      "Google Search Console",
      "SEO",
      "Internal Tools",
    ],
    href: "/projects",
  },
  {
    id: 2,
    period: ["AUG 2025", "— DEC 2025"],
    duration: "5 months",
    status: "OJT",
    statusType: "ojt",
    company: "Skyworth Philippines",
    companyMark: "SP",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Assisted with website updates, content management, data encoding, and e-commerce operations. Supported the digital marketing team and internal tools.",
    image: "/images/projects/skyworth.png",
    technologies: [
      "Shopify",
      "Content Management",
      "Data Encoding",
      "SEO",
    ],
    href: "/projects",
  },
  {
    id: 3,
    period: ["2024 — 2025"],
    duration: "1 year",
    status: "Academic",
    statusType: "academic",
    company: "Bulacan State University",
    companyMark: "BSU",
    role: "Capstone Project – Tech Revolution",
    location: "Malolos, Bulacan",
    description:
      "Developed a digital waste collection and scheduling platform for barangay residents. Added GPS tracking, SMS notifications, and management tools.",
    image: "/images/projects/waste-management.png",
    technologies: ["Java", "MySQL", "ESP32", "GPS", "SMS", "XAMPP"],
    href: "/projects",
  },
];

export function Timeline() {
  return (
    <div className="journey">
      <aside className="journey__intro">
        <p className="journey__eyebrow">Experience</p>

        <h2 id="experience-timeline-title" className="journey__title">
          My <span>Journey</span>
        </h2>

        <p className="journey__summary">
          Real experiences.
          <br />
          Real impact.
          <br />
          A continuous journey
          <br />
          of growth.
        </p>

        <span className="journey__accent" aria-hidden="true" />

        <div className="journey__signature" aria-hidden="true">
          <span>Build</span>
          <span>Learn</span>
          <span>Create</span>
          <span>Grow</span>
        </div>
      </aside>

      <ol className="journey__timeline">
        {experiences.map((experience) => (
          <li className="journey__item" key={experience.id}>
            <div className="journey__date">
              {experience.period.map((line) => (
                <strong key={line}>{line}</strong>
              ))}

              <span>{experience.duration}</span>
            </div>

            <div
              className={`journey__marker journey__marker--${experience.statusType}`}
              aria-hidden="true"
            />

            <article className="journey-card">
              <div className="journey-card__details">
                <div className="journey-card__top">
                  <span
                    className={`journey-card__logo journey-card__logo--${experience.statusType}`}
                    aria-hidden="true"
                  >
                    {experience.companyMark}
                  </span>

                  <div className="journey-card__heading">
                    <div className="journey-card__company">
                      <h3>{experience.company}</h3>

                      <span
                        className={`journey-card__status journey-card__status--${experience.statusType}`}
                      >
                        {experience.status}
                      </span>
                    </div>

                    <p className="journey-card__role">
                      {experience.role}
                    </p>

                    <p className="journey-card__location">
                      <span aria-hidden="true">●</span>
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="journey-card__description">
                  {experience.description}
                </p>

                <ul
                  className="journey-card__technologies"
                  aria-label="Technologies and tools"
                >
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <div className="journey-card__preview">
                <Image
                  src={experience.image}
                  alt={`${experience.company} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="journey-card__image"
                />

                <div
                  className="journey-card__preview-overlay"
                  aria-hidden="true"
                />

                <Link
                  href={experience.href}
                  className="journey-card__button"
                  aria-label={`View ${experience.company} case study`}
                >
                  View Case Study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}