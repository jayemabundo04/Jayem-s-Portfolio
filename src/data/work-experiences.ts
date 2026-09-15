export type WorkExperience = {
  id: number;
  period: string;
  duration: string;
  status?: string;
  company: string;
  role: string;
  location: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
};

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    period: "DEC 2025 – PRESENT",
    duration: "7+ months",
    status: "Current",
    company: "Skyworth Philippines",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Handles website management, online marketing support, and internal digital tools.",
    image: "/images/projects/skyworth.png",
    technologies: ["Shopify", "Node.js", "Google Console", "SEO", "Internal Tools"],
    href: "#",
  },
  {
    id: 2,
    period: "AUG 2025 – DEC 2025",
    duration: "5 months",
    status: "OJT",
    company: "Skyworth Philippines",
    role: "Online Marketing & Web Support Assistant",
    location: "Makati, Philippines",
    description:
      "Assisted in website updates, content management, data encoding, and e-commerce operations.",
    image: "/images/projects/skyworth.png",
    technologies: ["Shopify", "Content Management", "Data Encoding", "SEO"],
    href: "#",
  },
  {
    id: 3,
    period: "2024 – 2025",
    duration: "1 year",
    status: "Academic",
    company: "Bulacan State University",
    role: "Capstone Project – Tech Revolution",
    location: "Malolos, Bulacan",
    description:
      "Developed a digital waste collection and scheduling platform for barangay residents.",
    image: "/images/projects/waste-management.png",
    technologies: ["Java", "MySQL", "ESRI", "GPS", "GIS"],
    href: "#",
  },
];