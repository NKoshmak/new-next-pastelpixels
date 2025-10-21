import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CollabSection from "@/components/CollabSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
    <Head>
        <title>Pastel Pixels Studio – Feminine Templates for Creatives</title>
        <meta name="description" content="Elegant, soft, and functional website templates for creatives, coaches, and small businesses. Explore our HTML/CSS/JS, Kajabi, and Framer designs." />
        <meta property="og:title" content="Pastel Pixels Studio – Templates for Creatives" />
        <meta property="og:description" content="Shop minimal, feminine templates for Framer, Kajabi, and HTML. Perfect for creators and soulful brands." />
        <meta property="og:image" content="https://www.pastelpixelsstudio.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.pastelpixelsstudio.com/" />
      </Head>
    <main>  
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsHero />
        <ProjectsGrid />
        <CollabSection />
    </main>
    </>
  );
}