import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { StatementSection } from "@/components/ui/statement-section";
import { ScienceSection } from "@/components/ui/science-section";
import { Marquee } from "@/components/ui/marquee";
import { CaveBand } from "@/components/ui/cave-band";
import { TeamSection } from "@/components/ui/team-section";
import { ImpactSection } from "@/components/ui/impact-section";
import { NewsSection } from "@/components/ui/news-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatementSection />
        <ScienceSection />
        <Marquee />
        <CaveBand />
        <TeamSection />
        <ImpactSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
