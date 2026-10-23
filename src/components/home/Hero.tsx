import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export function Hero() {
  return (
    <section className="jp-home jp-hero" aria-labelledby="portfolio-heading">
      <div className="jp-grid" aria-hidden="true" />
      <div className="jp-container jp-hero-inner">
        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="jp-eyebrow"><span className="jp-dot" /> Portfolio / 2026 — Full Stack Developer</p>
          <h1 id="portfolio-heading" className="jp-title">
            <span>Design.</span>
            <span className="jp-outline">Develop.</span>
            <span className="jp-lime">Deliver.</span>
          </h1>
          <p className="jp-intro">
            Hi, I&apos;m Jose Martin C. Abundo Jr. I build thoughtful digital
            experiences, from polished interfaces to dependable full-stack
            systems. Made with purpose, built for people.
          </p>
          <div className="jp-actions">
            <Link href="#work-preview" className="jp-button jp-button-primary">Explore selected work <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="jp-button jp-button-secondary">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="jp-meta">
            <span>Based in the Philippines</span>
            <span aria-hidden="true">/</span>
            {socialLinks.map(link => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</Link>
            ))}
          </div>
        </div>
        <div className="jp-profile-wrap">
          <div className="jp-orbit" aria-hidden="true" />
          <div className="jp-profile">
            <Image src="/images/icon/profile.png" alt="Portrait of Jose Martin C. Abundo Jr." fill priority sizes="(max-width: 1000px) 90vw, 40vw" />
          </div>
          <div className="jp-visual-tag">Creative mind.<br />Technical craft.</div>
        </div>
        <span className="jp-bottom-label">Scroll to discover ↓</span>
        <span className="jp-bottom-index">01 / Introduction</span>
      </div>
    </section>
  );
}
