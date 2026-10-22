import type { Metadata } from "next";
import { ITSupportCaseStudy } from "@/components/work/ITSupportCaseStudy";

export const metadata: Metadata = {
  title: "IT Support OJT Case Study | Jay-Em's Portfolio",
  description:
    "Hands-on IT support at Skyworth Philippines, including employee helpdesk, PC hardware, Windows setup, office network coordination, and internal system development.",
  alternates: { canonical: "/work/it-support-ojt" },
  openGraph: {
    title: "IT Support OJT | Jay-Em's Portfolio",
    description:
      "IT support, troubleshooting, hardware and Windows setup, networking coordination, and employee system development.",
    url: "/work/it-support-ojt",
    type: "article",
    images: [
      {
        url: "/images/projects/ojt.jpg",
        alt: "IT support and operations during the Skyworth Philippines OJT",
      },
    ],
  },
};

export default function ITSupportOjtPage() {
  return <ITSupportCaseStudy />;
}
