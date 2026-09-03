import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
    </>
  );
}