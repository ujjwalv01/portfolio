import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProfilesSection from "@/components/ProfilesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProfilesSection />
      <ProjectsSection />
      <CompetitiveSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
