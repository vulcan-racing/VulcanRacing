"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CarSection from "@/components/sections/CarSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import CompetitionSection from "@/components/sections/CompetitionSection";
import InsightsSection from "@/components/sections/InsightsSection";
import GallerySection from "@/components/sections/GallerySection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import TeamSection from "@/components/sections/TeamSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import RecruitmentSection from "@/components/sections/RecruitmentSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

// Dynamic import for particle background (heavy canvas rendering)
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <Navigation />

      {/* No z-index here: it would trap the section modals below the fixed nav */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <CarSection />
        <DepartmentsSection />
        <CompetitionSection />
        <InsightsSection />
        <GallerySection />
        <AchievementsSection />
        <TeamSection />
        <SponsorsSection />
        <RecruitmentSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
