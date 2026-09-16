import type { Metadata } from "next";

import { SkyworthCaseStudy } from "@/components/work/SkyworthCaseStudy";

export const metadata: Metadata = {
  title: "Skyworth Philippines Case Study",
  description:
    "A case study covering Jay-Em's Shopify website management, SEO, digital support, and full-stack system development work for Skyworth Philippines.",
  alternates: {
    canonical: "/work/skyworth",
  },
  openGraph: {
    title: "Skyworth Philippines Case Study | Jay-Em's Portfolio",
    description:
      "Shopify website management, web support, SEO, and internal full-stack system development for Skyworth Philippines.",
    url: "/work/skyworth",
    type: "article",
    images: [
      {
        url: "/images/projects/skyworth.png",
        width: 1920,
        height: 903,
        alt: "Skyworth Philippines website case study",
      },
    ],
  },
};

export default function SkyworthCaseStudyPage() {
  return <SkyworthCaseStudy />;
}
