import Image from "next/image";
import Link from "next/link";

import styles from "./SkyworthCaseStudy.module.css";


const websiteTags = ["Shopify", "Liquid", "HTML/CSS", "JavaScript", "SEO", "Web Support"];
const websiteWork = [
  { title: "Shopify development", items: ["Website management", "Theme customization", "Liquid customization", "Custom sections"] },
  { title: "Interface and content", items: ["HTML/CSS modifications", "JavaScript interactions", "Responsive layouts", "Product and content updates", "Shopify applications"] },
  { title: "Visibility and upkeep", items: ["Navigation updates", "SEO work", "Google Search Console", "Image and content management"] },
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


export function SkyworthCaseStudy() {
  return (
    <article className={styles.caseStudy}>
      <div className={styles.ambientTop} aria-hidden="true" />
      <header className={styles.hero} aria-labelledby="case-study-title">
        <div className={styles.container}>
          <div className={styles.heroNavigation}>
            <nav aria-label="Breadcrumb"><ol className={styles.breadcrumbs}>
              <li><Link href="/work">Work</Link></li><li aria-hidden="true">›</li><li>Skyworth Philippines</li><li aria-hidden="true">›</li><li aria-current="page">Website Case Study</li>
            </ol></nav>
            <Link href="/work" className={styles.backLink}><span aria-hidden="true">←</span>Back to Work</Link>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>DEC 2025 — PRESENT</p>
              <h1 id="case-study-title" className={styles.heroTitle}>Skyworth <span>Philippines</span></h1>
              <p className={styles.role}>Online Marketing &amp; Web Support Assistant</p>
              <p className={styles.location}>Makati, Philippines</p>
              <p className={styles.heroIntro}>Shopify website management, storefront updates, e-commerce content, responsive layouts, and SEO support.</p>
              <ul className={styles.tagList} aria-label="Website technologies">{websiteTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div className={styles.heroVisual}>
              <ScreenshotFrame src="/images/projects/skyworth.png" alt="Skyworth Philippines Shopify website storefront" width={1920} height={903} label="Skyworth Philippines — Shopify Website" priority sizes="(max-width: 1040px) 100vw, 58vw" className={styles.heroBrowser} />
              <div className={styles.visualCaption}><span>Production website</span><span>Shopify storefront</span></div>
            </div>
          </div>
        </div>
      </header>
      <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="website-title">
        <div className={styles.container}>
          <div className={`${styles.sectionHeadingGrid} ${styles.websiteHeadingGrid}`}>
            <div><p className={styles.sectionLabel}><span>01</span>Website Development</p><h2 id="website-title">Skyworth Philippines Website</h2></div>
            <div className={styles.sectionLead}><h3>Building and Maintaining the Shopify Experience</h3><p>Managed and customized the Skyworth Philippines Shopify website, maintaining theme sections, Store Locator features, content, responsive layouts, SEO, and day-to-day website updates.</p></div>
          </div>
          <div className={styles.imageReveal}>
            <ScreenshotFrame src="/images/projects/Store.png" alt="Skyworth Philippines website home page with navigation and product lineup" width={1920} height={903} label="skyworth.com.ph — Website Experience" />
          </div>
          <div className={styles.websiteGrid}>
            {websiteWork.map((group, index) => <article className={styles.workCard} key={group.title}><span className={styles.cardIndex}>0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></article>)}
          </div>
          <div className={styles.websiteShowcase}>
            <div className={styles.websiteShowcaseCopy}><div><p className={styles.eyebrow}>Selected Website Work</p><h3>Responsive Shopify Execution</h3></div><p>Examples of storefront content, page presentation, and responsive website updates that keep product information clear across devices.</p></div>
            <div className={styles.websiteShowcaseGallery}>
              <figure className={styles.websiteShowcaseCard}><div className={styles.websiteShowcaseImageWrap}><Image src="/images/projects/Store.png" alt="Skyworth Philippines Shopify website page update" fill sizes="(max-width: 680px) 100vw, 50vw" className={styles.websiteShowcaseImage} /></div><figcaption><strong>Shopify Website Page Update</strong><span>Theme customization, storefront content, and product presentation.</span></figcaption></figure>
              <figure className={styles.websiteShowcaseCard}><div className={styles.websiteShowcaseImageWrap}><Image src="/images/projects/Work.png" alt="Skyworth Philippines interactive storefront" fill sizes="(max-width: 680px) 100vw, 50vw" className={styles.websiteShowcaseImage} /></div><figcaption><strong>Interactive Storefront</strong><span>Navigation, product browsing, and responsive page presentation.</span></figcaption></figure>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.stackSection} ${styles.reveal}`} aria-labelledby="website-stack-title">
        <div className={styles.container}><div className={styles.compactHeading}><p className={styles.sectionLabel}><span>02</span>Website Technology Stack</p><h2 id="website-stack-title">Shopify Website Tools</h2><p>Tools used across storefront development, content updates, and search visibility.</p></div>
          <div className={styles.stackGrid}>
            <article><span className={styles.stackNumber}>01</span><h3>Web Development</h3><ul>{["Shopify","Liquid","HTML","CSS","JavaScript"].map((tool)=><li key={tool}>{tool}</li>)}</ul></article>
            <article><span className={styles.stackNumber}>02</span><h3>Search &amp; Content</h3><ul>{["SEO","Google Search Console","Product Content","Store Locator"].map((tool)=><li key={tool}>{tool}</li>)}</ul></article>
          </div>
        </div>
      </section>
      <section className={`${styles.finalSection} ${styles.reveal}`} aria-labelledby="website-built-title">
        <div className={styles.container}><div className={styles.finalPanel}><p className={styles.eyebrow}>Skyworth Philippines · Website Case Study</p><h2 id="website-built-title">Website Management &amp; E-Commerce Support</h2><p>Work focused on keeping the Shopify storefront updated, presenting product information clearly, and supporting the website's search visibility.</p><div className={styles.finalActions}><Link href="/work" className={styles.secondaryButton}>← Back to Work</Link><Link href="/work/salesforce-system" className={styles.primaryButton}>View Salesforce System Case Study →</Link></div></div></div>
      </section>
    </article>
  );
}
