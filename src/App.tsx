import { Header } from "@/components/zerek/Header";
import { Hero } from "@/components/zerek/Hero";
import {
  SolutionsSection,
  AudienceSection,
  FinalCta,
  Footer,
} from "@/components/zerek/sections";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <SolutionsSection />
        <AudienceSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
