import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/landing/Hero";
import TestimonialGrid from "@/components/landing/TestimonialGrid";
import TheLie from "@/components/landing/TheLie";
import Deliverables from "@/components/landing/Deliverables";
import Qualifications from "@/components/landing/Qualifications";
import DanLokBio from "@/components/landing/DanLokBio";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <TestimonialGrid />
        <TheLie />
        <Deliverables />
        <DanLokBio />
        <Qualifications />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
