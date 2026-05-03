import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProfilesSection from "@/components/ProfilesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProfilesSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
