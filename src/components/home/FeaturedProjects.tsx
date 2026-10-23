import Image from "next/image";
import Link from "next/link";

const projects = [
  {number:"01",title:"Salesforce Promoter Management",category:"Full-stack application",description:"A centralized system for promoter records, sales reporting, workforce tracking, and daily operations.",image:"/images/projects/salesforce.png",href:"https://www.spc-salesforce.com/login",technologies:["React","Node.js","MongoDB"]},
  {number:"02",title:"SKYWORTH Philippines",category:"Digital commerce",description:"A product-focused shopping experience with responsive interfaces and accessible product information.",image:"/images/projects/skyworth.png",href:"https://www.skyworth.com.ph/",technologies:["Shopify","Liquid","JavaScript"]},
  {number:"03",title:"Waste Management System",category:"Connected community system",description:"A neighborhood collection platform with route tracking, scheduling, and resident notifications.",image:"/images/projects/waste-management.png",href:"https://sumapangmatanda-wastemanagement.vercel.app/",technologies:["Next.js","MongoDB","GPS"]}
];

export function FeaturedProjects() {
  return (
    <section id="work-preview" className="jp-home jp-work" aria-labelledby="selected-work-heading">
      <div className="jp-container">
        <div className="jp-section-top">
          <div>
            <p className="jp-section-label">02 / A selection of my work</p>
            <h2 id="selected-work-heading" className="jp-section-title">Selected projects<span style={{color:"#d6ff73"}}>.</span></h2>
          </div>
          <Link href="/projects" className="jp-view-all">All projects ↗</Link>
        </div>
        <div className="jp-project-list">
          {projects.map(project => (
            <article key={project.number} className="jp-project">
              <Link href={project.href} target="_blank" rel="noopener noreferrer" className="jp-project-image" aria-label={`Visit ${project.title}`}>
                <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes="(max-width: 700px) 100vw, 55vw" />
              </Link>
              <div className="jp-project-body">
                <p className="jp-project-number">{project.number} / {project.category}</p>
                <h3 className="jp-project-title">{project.title}</h3>
                <p className="jp-project-description">{project.description}</p>
                <div className="jp-chips">{project.technologies.map(tech=><span className="jp-chip" key={tech}>{tech}</span>)}</div>
                <Link className="jp-project-cta" href={project.href} target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="jp-contact-strip">
          <p>Have something in mind? <span style={{color:"#d6ff73"}}>Let&apos;s build it.</span></p>
          <Link href="/contact">Start a conversation ↗</Link>
        </div>
      </div>
    </section>
  );
}
