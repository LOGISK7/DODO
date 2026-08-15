import Hero from "@/components/landing/Hero";
import TheLie from "@/components/landing/TheLie";
import Qualifications from "@/components/landing/Qualifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <TheLie />
      <Qualifications />
    </main>
  );
}
