import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-moss">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">This page is not available yet.</h1>
        <p className="mt-4 text-slate-600">
          This route is reserved for an upcoming portfolio phase and is not published as finished content.
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
