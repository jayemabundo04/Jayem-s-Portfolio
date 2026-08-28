export default function ProjectsPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-moss">
            Work
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
            Projects built around real problems.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A selection of web, frontend, full-stack, and system projects
            that show how I approach development from planning to execution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-moss">
              Full-Stack System
            </p>

            <h2 className="mt-3 text-2xl font-bold text-ink">
              Promoter Workforce Analytics System
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A workforce management system focused on promoter records,
              sell-out data, status tracking, and reporting.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                Next.js
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                TypeScript
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                PostgreSQL
              </span>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-moss">
              Web System
            </p>

            <h2 className="mt-3 text-2xl font-bold text-ink">
              Waste Management System
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A barangay waste management system with scheduling,
              GPS-based tracking, resident messaging, and collection
              notifications.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                Java
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                MySQL
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                GPS
              </span>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-white p-6">
            <p className="text-sm font-semibold text-moss">
              E-Commerce
            </p>

            <h2 className="mt-3 text-2xl font-bold text-ink">
              Shopify Website Development
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Shopify storefront work focused on product presentation,
              responsive layouts, content management, and search visibility.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                Shopify
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                Liquid
              </span>

              <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700">
                SEO
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}