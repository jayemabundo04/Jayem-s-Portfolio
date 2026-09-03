import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Snowfall } from "@/components/layout/Snowfall";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteDescription =
  "Professional portfolio for Jay-Em, a web developer focused on full-stack applications, frontend development, and UI/UX design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jay-Em's Portfolio",
    template: "%s | Jay-Em's Portfolio"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Jay-Em's Portfolio",
    description: siteDescription,
    url: "/",
    siteName: "Jay-Em's Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay-Em's Portfolio",
    description: siteDescription
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
  <Snowfall />

  <a className="skip-link" href="#main-content">
    Skip to content
  </a>

  <Navbar />

  <main id="main-content">{children}</main>

  <Footer />
</body>
    </html>
  );
}
