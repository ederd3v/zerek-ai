import { useEffect } from "react";
import { Header } from "@/components/zerek/Header";
import { Hero } from "@/components/zerek/Hero";
import {
  SolutionsSection,
  AudienceSection,
  HowItWorksSection,
  FaqSection,
  FinalCta,
  Footer,
} from "@/components/zerek/sections";

export function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased relative">
      <div className="cursor-spotlight" aria-hidden />
      <Header />
      <main>
        <Hero />
        <SolutionsSection />
        <AudienceSection />
        <HowItWorksSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
