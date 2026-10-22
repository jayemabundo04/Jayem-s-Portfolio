import type { Metadata } from "next";
import { SalesforceCaseStudy } from "@/components/work/SalesforceCaseStudy";

export const metadata: Metadata = {
  title: "Salesforce System Case Study",
  description: "Full-stack MERN system development for internal sell-out analytics, business workflows, dealer data, and reporting at Skyworth Philippines.",
  alternates: { canonical: "/work/salesforce-system" },
  openGraph: {
    title: "Salesforce System Case Study | Jay-Em's Portfolio",
    description: "MERN-based internal business system for analytics, rankings, dealer data, and reporting.",
    url: "/work/salesforce-system",
    type: "article",
    images: [{ url: "/images/projects/salesforce.png", width: 1912, height: 910, alt: "Internal Salesforce sell-out analytics dashboard" }],
  },
};

export default function SalesforceSystemPage() {
  return <SalesforceCaseStudy />;
}
