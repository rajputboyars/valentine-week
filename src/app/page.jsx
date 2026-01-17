import FloatingHearts from "../components/home/FloatingHearts";
import HeroSection from "../components/home/HeroSection";
import LoveNote from "../components/home/LoveNote";
import StartJourneyCTA from "../components/home/StartJourneyCTA";
import ValentineWeekGrid from "../components/home/ValentineWeekGrid";
import WhyThisWebsite from "../components/home/WhyThisWebsite";

export default function HomePage() {
  return (
    <main className="bg-softPink min-h-screen overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveNote />
      <ValentineWeekGrid />
      <WhyThisWebsite />
      <StartJourneyCTA />
    </main>
  );
}
