import Image from "next/image";
import Link from "next/link";

import styles from "./ITSupportCaseStudy.module.css";

const supportAreas = [
  {
    number: "01",
    title: "Helpdesk & Troubleshooting",
    description:
      "Assisted employees with day-to-day computer issues, investigated symptoms, and helped restore devices so they could get back to work.",
    detail: "Employee support · Issue diagnosis · Technical assistance",
  },
  {
    number: "02",
    title: "Hardware & Windows Setup",
    description:
      "Helped replace PC components, format computers, and install Windows when a device needed a fresh setup.",
    detail: "PC parts replacement · Formatting · Windows installation",
  },
  {
    number: "03",
    title: "Office Network Support",
    description:
      "Supported office connectivity and coordinated with the senior IT team when network access to the China server needed attention.",
    detail: "Network troubleshooting · Connectivity checks · Team coordination",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand the issue",
    description:
      "Gather details from the employee and identify what is not working as expected.",
  },
  {
    number: "02",
    title: "Diagnose and resolve",
    description:
      "Check the device, software, hardware, or network connection and apply the appropriate fix within the assigned scope.",
  },
  {
    number: "03",
    title: "Coordinate and verify",
    description:
      "Work with the senior IT team for issues requiring escalation, then check that the employee can continue working.",
  },
];

export function ITSupportCaseStudy() {
  return (
    <article className={styles.caseStudy}>
      <div className={styles.ambientTop} aria-hidden="true" />

      <header className={styles.hero} aria-labelledby="ojt-case-title">
        <div className={styles.container}>
          <div className={styles.heroNavigation}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumbs}>
                <li><Link href="/work">Work</Link></li>
                <li aria-hidden="true">›</li>
                <li>Skyworth Philippines</li>
                <li aria-hidden="true">›</li>
                <li aria-current="page">IT Support OJT</li>
              </ol>
            </nav>
            <Link href="/work" className={styles.backLink}>
              <span aria-hidden="true">←</span> Back to Work
            </Link>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>AUG 2025 — DEC 2025 · OJT</p>
              <h1 id="ojt-case-title" className={styles.heroTitle}>
                IT Support <span>&amp; Operations</span>
              </h1>
              <p className={styles.role}>IT Support Intern / OJT</p>
              <p className={styles.location}>Skyworth Philippines · Makati</p>
              <p className={styles.heroIntro}>
                Hands-on IT support experience helping employees with computer
                issues, PC hardware, Windows installation, office connectivity,
                and an internal employee time-in/time-out system.
              </p>
              <ul className={styles.tagList} aria-label="Areas of experience">
                {["Helpdesk", "Hardware Support", "Windows", "Networking", "System Development"].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/projects/ojt.jpg"
                  alt="IT support and operations during the Skyworth Philippines OJT"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 52vw"
                  className={styles.heroImage}
                />
                <div className={styles.imageShade} aria-hidden="true" />
                <div className={styles.imageCaption}>
                  <span>On-the-job training</span>
                  <strong>IT Support · Aug–Dec 2025</strong>
                </div>
              </div>
              <div className={styles.visualNote}>
                <span className={styles.noteDot} aria-hidden="true" />
                <span>Practical support in a live office environment</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="support-overview-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}><span>01</span> Core Responsibilities</p>
            <h2 id="support-overview-title">Supporting people, devices, and daily operations.</h2>
            <p>
              My OJT combined hands-on troubleshooting with setup and coordination
              tasks that helped employees use their computers and office systems.
            </p>
          </div>

          <div className={styles.responsibilityGrid}>
            {supportAreas.map((area) => (
              <article className={styles.responsibilityCard} key={area.number}>
                <span className={styles.cardNumber}>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className={styles.cardDetail}>{area.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="workflow-title">
        <div className={styles.container}>
          <div className={styles.workflowPanel}>
            <div className={styles.workflowIntro}>
              <p className={styles.sectionLabel}><span>02</span> Support Workflow</p>
              <h2 id="workflow-title">A practical, step-by-step approach to resolving issues.</h2>
              <p>
                When an issue needed deeper network access or permissions, I
                coordinated with the senior IT team rather than making unsupported
                changes to shared infrastructure.
              </p>
            </div>
            <ol className={styles.workflowList}>
              {workflow.map((step) => (
                <li key={step.number}>
                  <span className={styles.workflowNumber}>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="system-development-title">
        <div className={styles.container}>
          <div className={styles.systemCard}>
            <div className={styles.systemCopy}>
              <p className={styles.sectionLabel}><span>03</span> Internal System</p>
              <h2 id="system-development-title">Employee Time-in / Time-out System</h2>
              <p>
                Alongside IT support duties, I contributed to the development of
                an internal system for recording employee time-in and time-out.
                This gave me experience connecting day-to-day workplace needs with
                a practical software solution.
              </p>
              <ul className={styles.systemPoints}>
                <li><span aria-hidden="true">✓</span> Supported an internal business workflow</li>
                <li><span aria-hidden="true">✓</span> Worked across technical support and system development</li>
                <li><span aria-hidden="true">✓</span> Learned to consider real employee needs and usage</li>
              </ul>
            </div>
           <div className={styles.systemVisual}>
  <Image
    src="/images/projects/ojt3.jpg"
    alt="Employee Time-in and Time-out System"
    width={1200}
    height={800}
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      objectFit: "contain",
    }}
  />
</div>
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="ojt-takeaway-title">
        <div className={styles.container}>
          <div className={styles.finalPanel}>
            <p className={styles.kicker}>SKYWORTH PHILIPPINES · OJT EXPERIENCE</p>
            <h2 id="ojt-takeaway-title">Learning by solving real workplace problems.</h2>
            <p>
              This experience strengthened my troubleshooting habits, practical
              understanding of computer hardware and office networks, and interest
              in building useful systems for people at work.
            </p>
            <div className={styles.finalActions}>
              <Link href="/work" className={styles.secondaryButton}>← Back to Work</Link>
              <Link href="/work/salesforce-system" className={styles.primaryButton}>
                View System Development Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
