import Image from "next/image";
import Link from "next/link";

import styles from "./SkyworthCaseStudy.module.css";

const heroTags = [
  "Shopify",
  "Liquid",
  "HTML/CSS",
  "JavaScript",
  "SEO",
  "Web Support",
  "System Development",
];

const websiteWork = [
  {
    title: "Shopify development",
    items: ["Website management", "Theme customization", "Liquid customization", "Custom sections"],
  },
  {
    title: "Interface and content",
    items: ["HTML/CSS modifications", "JavaScript interactions", "Responsive layouts", "Product and content updates", " Shopify Applications"],
  },
  {
    title: "Visibility and upkeep",
    items: ["Navigation updates", "SEO work", "Google Search Console", "Image and content management"],
  },
];

const systemTechnologies = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Vite",
  "GitHub",
  "Railway",
  "GoDaddy",
];

const architecture = [
  { label: "Frontend", value: "React + Vite" },
  { label: "Backend", value: "Node.js + Express.js" },
  { label: "Database", value: "MongoDB" },
  { label: "Deployment", value: "Railway" },
  { label: "Domain", value: "GoDaddy" },
  { label: "Version Control", value: "GitHub" },
];

type ContributionIcon =
  | "website"
  | "commerce"
  | "interface"
  | "search"
  | "system"
  | "support";

const contributions: { title: string; icon: ContributionIcon }[] = [
  { title: "Website Management", icon: "website" },
  { title: "Shopify Development", icon: "commerce" },
  { title: "UI Implementation", icon: "interface" },
  { title: "SEO & Content Updates", icon: "search" },
  { title: "Full-Stack System Development", icon: "system" },
  { title: "IT / Digital Support", icon: "support" },
];

const stackGroups = [
  {
    title: "Web Development",
    tools: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Full-Stack Development",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "Vite"],
  },
  {
    title: "Tools & Deployment",
    tools: ["GitHub", "Railway", "GoDaddy", "Google Search Console"],
  },
];

const gallery = [
  {
    src: "/images/projects/skyworth.png",
    alt: "Skyworth Philippines Shopify website home page",
    title: "Skyworth Philippines Website",
    caption: "Production storefront, product presentation, and navigation.",
    width: 1920,
    height: 903,
  },
  {
    src: "/images/projects/salesforce.png",
    alt: "Internal Salesforce system sell-out analytics dashboard",
    title: "Sell-Out Analytics Dashboard",
    caption: "Date filters, business metrics, model rankings, and dealer data.",
    width: 1912,
    height: 910,
  },
  {
    src: "/images/projects/promoter.png",
    alt: "Internal system sign-in screen with application install prompt",
    title: "System Access Experience",
    caption: "Role selection, secure access, and application install prompt.",
    width: 1915,
    height: 911,
  },
];

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 86vw",
  className,
}: ScreenshotFrameProps) {
  const frameClassName = [styles.browserFrame, className].filter(Boolean).join(" ");

  return (
    <figure className={frameClassName}>
      <div className={styles.browserChrome} aria-hidden="true">
        <span />
        <span />
        <span />
        <p>{label}</p>
      </div>

      <div className={styles.browserViewport}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={styles.browserImage}
        />
      </div>
    </figure>
  );
}

function ContributionGlyph({ icon }: { icon: ContributionIcon }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (icon === "website") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M3 8h18" />
      </svg>
    );
  }

  if (icon === "commerce") {
    return (
      <svg {...commonProps}>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </svg>
    );
  }

  if (icon === "interface") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 4v16M9 10h12" />
      </svg>
    );
  }

  if (icon === "search") {
    return (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 5 5M8 11h6M11 8v6" />
      </svg>
    );
  }

  if (icon === "system") {
    return (
      <svg {...commonProps}>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z" />
    </svg>
  );
}

export function SkyworthCaseStudy() {
  return (
    <article className={styles.caseStudy}>
      <div className={styles.ambientTop} aria-hidden="true" />

      <header className={styles.hero} aria-labelledby="case-study-title">
        <div className={styles.container}>
          <div className={styles.heroNavigation}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumbs}>
                <li>
                  <Link href="/work">Work</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>Skyworth Philippines</li>
                <li aria-hidden="true">›</li>
                <li aria-current="page">Case Study</li>
              </ol>
            </nav>

            <Link href="/work" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              Back to Work
            </Link>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>DEC 2025 — PRESENT</p>

              <h1 id="case-study-title" className={styles.heroTitle}>
                Skyworth <span>Philippines</span>
              </h1>

              <p className={styles.role}>Online Marketing &amp; Web Support Assistant</p>

              <p className={styles.location}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Makati, Philippines
              </p>

              <p className={styles.heroIntro}>
                A closer look at my work supporting Skyworth Philippines through website
                management, e-commerce development, SEO, digital support, and internal system
                development.
              </p>

              <ul className={styles.tagList} aria-label="Case study technologies">
                {heroTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <ScreenshotFrame
                src="/images/projects/skyworth.png"
                alt="Skyworth Philippines Shopify website showing the NEXO QLED product line"
                width={1920}
                height={903}
                label="Skyworth Philippines — Shopify Website"
                priority
                sizes="(max-width: 1040px) 100vw, 58vw"
                className={styles.heroBrowser}
              />
              <div className={styles.visualCaption}>
                <span>Production website</span>
                <span>Shopify storefront</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="website-title">
          <div className={styles.container}>
            <div className={`${styles.sectionHeadingGrid} ${styles.websiteHeadingGrid}`}>
              <div>
                <p className={styles.sectionLabel}>
                  <span>01</span>
                  Website Development
                </p>
                <h2 id="website-title">Skyworth Philippines Website</h2>
              </div>

              <div className={styles.sectionLead}>
                <h3>Building and Maintaining the Shopify Experience</h3>
                <p>
                  Managed and customized the Skyworth Philippines Shopify website,
                  developing and maintaining theme sections, Store Locator features, content,
                  responsive layouts, SEO, and day-to-day website updates.
                </p>
              </div>
            </div>

            <div className={styles.imageReveal}>
              <ScreenshotFrame
                src="/images/projects/Store.png"
                alt="Skyworth Philippines website home page with navigation and product lineup"
                width={1920}
                height={903}
                label="skyworth.com.ph — Website Experience"
              />
            </div>

            <div className={styles.websiteGrid}>
              {websiteWork.map((group, index) => (
                <article className={styles.workCard} key={group.title}>
                  <span className={styles.cardIndex}>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className={styles.websiteShowcase}>
  <div className={styles.websiteShowcaseCopy}>
    <div>
      <p className={styles.eyebrow}>Selected Website Work</p>

      <h3>Responsive Shopify Execution</h3>
    </div>

    <p>
      These examples show how I handled storefront content, page
      presentation, and responsive website updates while keeping product
      information clear and consistent across devices.
    </p>
  </div>

  <div className={styles.websiteShowcaseGallery}>
    <figure className={styles.websiteShowcaseCard}>
      <div className={styles.websiteShowcaseImageWrap}>
        <Image
          src="/images/projects/skyworth-detail-01.png"
          alt="Skyworth Philippines Shopify website page update"
          fill
          sizes="(max-width: 680px) 100vw, 50vw"
          className={styles.websiteShowcaseImage}
        />
      </div>

      <figcaption>
        <strong>Desktop Storefront</strong>
        <span>Product and campaign content presentation.</span>
      </figcaption>
    </figure>

    <figure className={styles.websiteShowcaseCard}>
      <div className={styles.websiteShowcaseImageWrap}>
        <Image
          src="/images/projects/skyworth-detail-02.png"
          alt="Skyworth Philippines responsive storefront experience"
          fill
          sizes="(max-width: 680px) 100vw, 50vw"
          className={styles.websiteShowcaseImage}
        />
      </div>

      <figcaption>
        <strong>Responsive Experience</strong>
        <span>Website layout adapted across different screen sizes.</span>
      </figcaption>
    </figure>
  </div>
</div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.opportunitySection} ${styles.reveal}`}
          aria-labelledby="opportunity-title"
        >
          <div className={styles.container}>
            <p className={styles.sectionLabel}>
              <span>02</span>
              System Development Opportunity
            </p>

            <div className={styles.opportunityGrid}>
              <div className={styles.opportunityCopy}>
                <h2 id="opportunity-title">From Web Support to System Development</h2>
                <p>
                  Through my work in web support and digital operations, I was given the
                  opportunity to participate in a company system development contest.
                </p>
                <p>
                  This gave me the opportunity to apply my development skills beyond website
                  work and contribute to an internal business system.
                </p>
              </div>

              <div className={styles.progression} aria-label="Development progression">
                <article className={styles.progressCard}>
                  <span>Starting point</span>
                  <h3>Shopify / Web Development</h3>
                  <p>Production site support, theme work, content, and search visibility.</p>
                </article>

                <div className={styles.progressArrow} aria-hidden="true">
                  <span />
                  <strong>→</strong>
                </div>

                <article className={`${styles.progressCard} ${styles.progressCardAccent}`}>
                  <span>Expanded scope</span>
                  <h3>Full-Stack System Development</h3>
                  <p>Frontend, backend, database, deployment, and version control.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="system-title">
          <div className={styles.container}>
            <div className={styles.systemIntro}>
              <div>
                <p className={styles.sectionLabel}>
                  <span>03</span>
                  Salesforce System
                </p>
                <h2 id="system-title">Internal Salesforce System</h2>
              </div>

              <div>
                <p className={styles.systemDescription}>
                  Developed a full-stack MERN-based Salesforce system for managing internal
                  business operations, workflows, and data through a centralized web
                  application.
                </p>
                <ul className={styles.tagList} aria-label="System technologies">
                  {systemTechnologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.imageReveal}>
              <ScreenshotFrame
                src="/images/projects/salesforce.png"
                alt="Skyworth internal system dashboard with sell-out analytics, filters, and rankings"
                width={1912}
                height={910}
                label="Internal System — Sell-Out Analytics Overview"
              />
            </div>

            <div className={styles.systemDetails}>
              <div className={styles.fullStackPanel}>
                <p className={styles.eyebrow}>System Architecture</p>
                <h3>Full-Stack Development</h3>

                <dl className={styles.architectureGrid}>
                  {architecture.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <figure className={styles.supportingVisual}>
                <div className={styles.supportingImageWrap}>
                  <Image
                    src="/images/projects/promoter.png"
                    alt="Skyworth internal system role-based sign-in and install prompt"
                    width={1915}
                    height={911}
                    sizes="(max-width: 900px) 100vw, 42vw"
                    className={styles.supportingImage}
                  />
                </div>
                <figcaption>
                  <strong>System access experience</strong>
                  <span>Role selection and application install prompt.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.contributionsSection} ${styles.reveal}`}
          aria-labelledby="contributions-title"
        >
          <div className={styles.container}>
            <div className={styles.compactHeading}>
              <p className={styles.sectionLabel}>
                <span>04</span>
                My Contributions
              </p>
              <h2 id="contributions-title">My Contributions</h2>
              <p>
                Work spanning the production website, digital operations, and an internal
                business system.
              </p>
            </div>

            <ul className={styles.contributionGrid}>
              {contributions.map((contribution) => (
                <li key={contribution.title}>
                  <span className={styles.iconBox}>
                    <ContributionGlyph icon={contribution.icon} />
                  </span>
                  <h3>{contribution.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="gallery-title">
          <div className={styles.container}>
            <div className={styles.compactHeading}>
              <p className={styles.sectionLabel}>
                <span>05</span>
                Project Gallery
              </p>
              <h2 id="gallery-title">Project Gallery</h2>
              <p>Verified website and system views from the project repository.</p>
            </div>

            <div className={styles.galleryGrid}>
              {gallery.map((item, index) => (
                <a
                  className={index === 0 ? styles.galleryFeature : styles.galleryCard}
                  href={item.src}
                  target="_blank"
                  rel="noreferrer"
                  key={item.src}
                  aria-label={`Open full screenshot: ${item.title}`}
                >
                  <div className={styles.galleryImageWrap}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes={index === 0 ? "(max-width: 900px) 100vw, 62vw" : "(max-width: 900px) 100vw, 32vw"}
                      className={styles.galleryImage}
                    />
                  </div>
                  <div className={styles.galleryCaption}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.stackSection} ${styles.reveal}`}
          aria-labelledby="stack-title"
        >
          <div className={styles.container}>
            <div className={styles.compactHeading}>
              <p className={styles.sectionLabel}>
                <span>06</span>
                Technology Stack
              </p>
              <h2 id="stack-title">Technology Stack</h2>
              <p>Tools grouped by their role across the website and internal system work.</p>
            </div>

            <div className={styles.stackGrid}>
              {stackGroups.map((group, index) => (
                <article key={group.title}>
                  <span className={styles.stackNumber}>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.finalSection} ${styles.reveal}`} aria-labelledby="built-title">
          <div className={styles.container}>
            <div className={styles.finalPanel}>
              <p className={styles.eyebrow}>Skyworth Philippines · Case Study</p>
              <h2 id="built-title">What I Built</h2>
              <p>
                From managing a production e-commerce website to developing an internal
                business system, this experience allowed me to work across web development,
                digital support, and full-stack development.
              </p>

              <div className={styles.finalActions}>
                <Link href="/work" className={styles.secondaryButton}>
                  <span aria-hidden="true">←</span>
                  Back to Work
                </Link>
                <Link href="/projects" className={styles.primaryButton}>
                  View More Projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
