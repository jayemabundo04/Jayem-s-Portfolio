import Image from "next/image";

type Experience = {
  id: number;
  period: string;
  duration: string;
  status: string;
  statusType: "current" | "ojt" | "academic";
  company: string;
  role: string;
  location: string;
  description: string;
  image: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    period: "DEC 2025 – PRESENT",
    duration: "9+ months",
    status: "Current",
    statusType: "current",
    company: "Skyworth Philippines",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Handles website management, online marketing support, e-commerce content, and internal digital tools.",
    image: "/images/projects/skyworth.png",
    technologies: [
      "Shopify",
      "Node.js",
      "Google Search Console",
      "SEO",
      "Internal Tools",
    ],
  },
  {
    id: 2,
    period: "AUG 2025 – DEC 2025",
    duration: "5 months",
    status: "OJT",
    statusType: "ojt",
    company: "Skyworth Philippines",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Assisted with website updates, content management, data encoding, and e-commerce operations.",
    image: "/images/projects/skyworth.png",
    technologies: [
      "Shopify",
      "Content Management",
      "Data Encoding",
      "SEO",
    ],
  },
  {
    id: 3,
    period: "2024 – 2025",
    duration: "1 year",
    status: "Academic",
    statusType: "academic",
    company: "Bulacan State University",
    role: "Capstone Project – Tech Revolution",
    location: "Malolos, Bulacan",
    description:
      "Developed a digital waste collection and scheduling platform for barangay residents.",
    image: "/images/projects/waste-management.png",
    technologies: ["Java", "MySQL", "ESRI", "GPS", "GIS"],
  },
];

export function Timeline() {
  return (
    <div className="experience-timeline">
      <div className="experience-timeline__heading">
        <p>02 / 02 &nbsp; CAREER TIMELINE</p>
        <h2 id="experience-timeline-title">
          Experience &amp; <span>Growth.</span>
        </h2>
      </div>

      <ol className="experience-timeline__list">
        {experiences.map((experience) => (
          <li className="experience-timeline__item" key={experience.id}>
            <div className="experience-timeline__date">
              <p>{experience.period}</p>
              <span>{experience.duration}</span>
            </div>

            <div
              className="experience-timeline__marker"
              aria-hidden="true"
            />

            <article className="experience-card">
              <div className="experience-card__content">
                <div className="experience-card__header">
                  <div>
                    <div className="experience-card__company-row">
                      <h3>{experience.company}</h3>

                      <span
                        className={`experience-card__status experience-card__status--${experience.statusType}`}
                      >
                        {experience.status}
                      </span>
                    </div>

                    <p className="experience-card__role">
                      {experience.role}
                    </p>

                    <p className="experience-card__location">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="experience-card__description">
                  {experience.description}
                </p>

                <ul
                  className="experience-card__technologies"
                  aria-label="Technologies and tools"
                >
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-card__media">
                <Image
                  src={experience.image}
                  alt={`${experience.company} work preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="experience-card__image"
                />

                <a
                  href="#"
                  className="experience-card__button"
                  aria-label={`View more about ${experience.company}`}
                >
                  View More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}