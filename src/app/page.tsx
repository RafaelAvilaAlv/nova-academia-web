import AboutSection from "@/components/home/AboutSection";
import AdmissionsSection from "@/components/home/AdmissionsSection";
import CampusSection from "@/components/home/CampusSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />
      <Hero />
      <AboutSection />
      <CampusSection />
      <ProgramsSection />
      <AdmissionsSection />
      <NewsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}