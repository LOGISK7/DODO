import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
      <StickyCta />
    </>
  );
}
