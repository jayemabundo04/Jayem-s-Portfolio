import type { Metadata } from "next";

import { SkyworthCaseStudy } from "@/components/work/SkyworthCaseStudy";

export const metadata: Metadata = {
  title: "Skyworth Philippines Shopify Website Case Study",
  description:
    "Shopify storefront management, theme customization, responsive website updates, e-commerce content, and SEO support for Skyworth Philippines.",
  alternates: {
    canonical: "/work/skyworth-website",
  },
  openGraph: {
    title: "Skyworth Philippines Case Study | Jay-Em's Portfolio",
    description:
      "Shopify website management, storefront updates, responsive layouts, and SEO support.",
    url: "/work/skyworth-website",
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
