"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const fieldClass =
    "mt-2.5 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-200 focus:border-violet-400/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10";

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070912] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-[8%] h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[24rem] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
          <span className="h-px w-8 bg-violet-400" />
          Contact
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-violet-300 via-indigo-300 to-blue-300 bg-clip-text pb-2 text-transparent">
                worth talking about.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Have a project, a role, or an idea in mind? Tell me a little about it.
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 lg:block">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-slate-300">Open to opportunities</span>
            </div>
            <p className="mt-2 pl-[18px] text-xs text-slate-500">Philippines · Remote or onsite</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 lg:px-12 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <aside className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8 lg:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Get in touch</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Start a conversation.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              I&apos;m open to opportunities in frontend and full-stack development,
              UI/UX, Shopify, and IT support.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:jayemabundo02@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-200" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">Email me</span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-200 group-hover:text-white">jayemabundo02@gmail.com</span>
                </span>
                <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-violet-200" aria-hidden="true">↗</span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-200" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Based in</span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">Philippines</span>
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Areas I can help with</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Frontend development", "Shopify", "UI/UX", "IT support"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-auto pt-10 text-xs leading-6 text-slate-500">
              Prefer email? You can contact me directly and share the details at your own pace.
            </p>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-[#0d101c]/90 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-start">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Send a message</h2>
                <p className="mt-1.5 text-sm text-slate-400">Fields marked with * are required.</p>
              </div>
              <span className="w-fit rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">Typically replies soon</span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-200">Your name <span className="text-violet-300">*</span></label>
                <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Juan Dela Cruz" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-200">Email address <span className="text-violet-300">*</span></label>
                <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" className={fieldClass} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-200">Subject <span className="text-violet-300">*</span></label>
                <input id="subject" name="subject" type="text" required maxLength={150} placeholder="Project inquiry, job opportunity..." className={fieldClass} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-200">Message <span className="text-violet-300">*</span></label>
                <textarea id="message" name="message" required maxLength={5000} rows={6} placeholder="Share a few details about what you have in mind..." className={fieldClass + " min-h-40 resize-y"} />
                <p className="mt-2 text-xs text-slate-500">A little context helps me give you a better reply.</p>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-200 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-900/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48"
                >
                  {status === "sending" ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 animate-spin" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
                        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send message
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p role="status" className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-3 text-sm text-emerald-300">
                    Your message has been sent successfully. Thanks for reaching out!
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-3 text-sm text-red-300">
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
