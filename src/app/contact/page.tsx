export default function ContactPage() {
  return (
    <main className="bg-paper">
      <section className="border-b border-line py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-moss">
            Contact
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
            Let&apos;s talk about your next project.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Have a project, opportunity, or role in mind? Send me a message
            and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-ink">
              Start a conversation.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              I&apos;m open to opportunities involving frontend development,
              full-stack development, UI/UX, Shopify, and IT support.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="mt-1 text-slate-600">
                  Your email address
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Location</p>
                <p className="mt-1 text-slate-600">
                  Philippines
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-lg border border-line bg-white p-6 sm:p-8">
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-ink"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-moss"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-ink"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-moss"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-ink"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-moss"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-ink"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-md border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-moss"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}