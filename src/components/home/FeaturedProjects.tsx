import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Promoter Workforce Analytics System",
    category: "Full-Stack System",
    description:
      "A workforce management system for promoter records, sell-out data, status tracking, and reporting.",
    image: "/images/projects/salesforce.png",
    href: "https://www.spc-salesforce.com/login",
    technologies: ["React", "Node.js" , "Express", "MongoDB", "Vite", "GitHub", "Vercel", "Railway","Goddaddy"],
  },
  {
  title: "Skyworth Philippines Website",
  category: "E-Commerce Website",
  description:
    "A Shopify website focused on product presentation, responsive layouts, content updates, and SEO.",
  image: "/images/projects/skyworth.png",
  href: "https://www.skyworth.com.ph/",
  technologies: ["Shopify", "Liquid", "JavaScript", "SEO", "Html", "CSS"],
},
{
  title: "Waste Management System",
  category: "Web System",
  description:
    "A barangay waste management system with scheduling, GPS tracking, resident messaging, and collection notifications.",
  image: "/images/projects/waste-management.png",
  href: "https://sumapangmatanda-wastemanagement.vercel.app/",
  technologies: ["Next.js", "MongoDB", "GPS", "SIM800L", "Vite", "GitHub", "Vercel", "ESP32", "Neo-M8N GPS module"],
},
];

export function FeaturedProjects() {
  return (
    <section
      id="work-preview"
className="relative -mt-8 overflow-hidden border-b border-white/5 bg-[#05070d] py-16 text-white sm:-mt-10 sm:py-20"    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Container */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              Featured Work
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Recent Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="group hidden items-center gap-2 text-xs font-medium text-violet-400 transition hover:text-violet-300 sm:flex"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.04]"
            >
              {/* Project Image */}
              <Link
  href={project.href}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#0b0f18]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/30 via-transparent to-transparent" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-400">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-base font-semibold leading-6 text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <Link
                    href="/projects"
                    aria-label={`View ${project.title}`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 text-xs text-slate-400 transition group-hover:border-violet-500/40 group-hover:text-violet-300"
                  >
                    ↗
                  </Link>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/5 bg-white/[0.035] px-2 py-1 text-[9px] text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/projects"
            className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}