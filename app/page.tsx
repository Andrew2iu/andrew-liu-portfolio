import CanvasBackground from "@/components/CanvasBackground"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import EducationSection from "@/components/EducationSection"
import WorkSection from "@/components/WorkSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import FooterSection from "@/components/FooterSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black relative">
      <CanvasBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </main>
  )
}
