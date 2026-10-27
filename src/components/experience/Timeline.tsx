
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Experience = {
  id: number;
  period: string[];
  duration: string;
  startDate?: string;
  status: string;
  statusType: "current" | "ojt" | "academic";
  company: string;
  companyMark: string;
  companyLogo?: string;
  role: string;
  location: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
};

// Calculate completed months from the start date.
function calculateDuration(
  startDate: string,
  today: Date
): string {
  const [year, month, day] = startDate
    .split("-")
    .map(Number);

  let totalMonths =
    (today.getFullYear() - year) * 12 +
    (today.getMonth() - (month - 1));

  // Count only completed months.
  if (today.getDate() < day) {
    totalMonths--;
  }

  totalMonths = Math.max(0, totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${
      months === 1 ? "month" : "months"
    }`;
  }

  const yearText = `${years} ${
    years === 1 ? "year" : "years"
  }`;

  if (months === 0) {
    return yearText;
  }

  return `${yearText} ${months} ${
    months === 1 ? "month" : "months"
  }`;
}

const experiences: Experience[] = [
  {
    id: 1,
    period: ["DEC 2025", "— PRESENT"],
    duration: "Ongoing",
    startDate: "2025-12-01",
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
      "Liquid",
      "HTML/CSS",
      "JavaScript",
      "SEO",
    ],
    href: "/work/skyworth-website",
  },
  {
    id: 2,
    period: ["DEC 2025", "— PRESENT"],
    duration: "Ongoing",
    startDate: "2025-12-01",
    status: "Project",
    statusType: "current",
    company: "Skyworth Philippines",
    companyMark: "SP",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Developed a full-stack MERN-based Salesforce system for managing internal business operations, workflows, and data through a centralized web application.",
    image: "/images/projects/salesforce.png",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Railway",
      "GoDaddy",
      "GitHub",
      "Vercel",
      "Vite",
    ],
    href: "/work/salesforce-system",
  },
  {
    id: 3,
    period: ["AUG 2025", "— DEC 2025"],
    duration: "5 months",
    status: "OJT",
    statusType: "ojt",
    company: "Skyworth Philippines",
    companyMark: "SP",
    role: "IT Support / OJT",
    location: "Makati, Philippines",
    description:
      "Provided IT support through system development, network setup, administrative assistance, helpdesk support, and hardware and software troubleshooting.",
    image: "/images/projects/ojt.jpg",
    technologies: [
      "IT Support",
      "Networking",
      "Troubleshooting",
      "Helpdesk",
      "System Development",
    ],
    href: "/work/it-support-ojt",
  },
  {
    id: 4,
    period: ["2024 — 2025"],
    duration: "1 year",
    status: "Academic",
    statusType: "academic",
    company: "Bulacan State University",
    companyMark: "BSU",
    companyLogo: "/images/icon/bsu.jpg",
    role: "Capstone Project – Tech Revolution",
    location: "Malolos, Bulacan",
    description:
      "Developed a digital waste collection and scheduling platform for barangay residents. Added GPS tracking, SMS notifications, and management tools.",
    image: "/images/projects/waste-management.png",
    technologies: [
      "MERN Stack",
      "Vercel",
      "GitHub",
      "ESP32",
      "GPS",
      "SMS",
      "XAMPP",
      "Neo-M8N GPS module",
      "Arduino IDE",
    ],
    href: "/projects",
  },
];

export function Timeline() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const updateDate = () => {
      setToday(new Date());
    };

    updateDate();

    // Refresh the date every hour.
    const interval = window.setInterval(
      updateDate,
      60 * 60 * 1000
    );

    // Refresh when the user returns to the tab.
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateDate();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      window.clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return (
    <div className="journey">
      <aside className="journey__intro">
        <p className="journey__eyebrow">
          Experience
        </p>

        <h2
          id="experience-timeline-title"
          className="journey__title"
        >
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

        <span
          className="journey__accent"
          aria-hidden="true"
        />

        <div
          className="journey__signature"
          aria-hidden="true"
        >
          <span>Build</span>
          <span>Learn</span>
          <span>Create</span>
          <span>Grow</span>
        </div>
      </aside>

      <ol className="journey__timeline">
        {experiences.map((experience) => {
          const displayDuration =
            experience.startDate && today
              ? calculateDuration(
                  experience.startDate,
                  today
                )
              : experience.duration;

          return (
            <li
              className="journey__item"
              key={experience.id}
            >
              <div className="journey__date">
                {experience.period.map((line) => (
                  <strong key={line}>
                    {line}
                  </strong>
                ))}

                <span>{displayDuration}</span>
              </div>

              <div
                className={`journey__marker journey__marker--${experience.statusType}`}
                aria-hidden="true"
              />

              <article className="journey-card">
                <div className="journey-card__details">
                  <div className="journey-card__top">
                    <div
                      className={`journey-card__logo journey-card__logo--${experience.statusType}`}
                    >
                      {experience.companyLogo ? (
                        <Image
                          src={experience.companyLogo}
                          alt={`${experience.company} logo`}
                          width={38}
                          height={38}
                          className="journey-card__logo-image"
                        />
                      ) : (
                        <span aria-hidden="true">
                          {experience.companyMark}
                        </span>
                      )}
                    </div>

                    <div className="journey-card__heading">
                      <div className="journey-card__company">
                        <h3>
                          {experience.company}
                        </h3>

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
                        <span aria-hidden="true">
                          ●
                        </span>
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
                    {experience.technologies.map(
                      (technology) => (
                        <li key={technology}>
                          {technology}
                        </li>
                      )
                    )}
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
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
