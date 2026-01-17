import KissHero from "../../components/kiss-day/KissHero";
import AnimatedHearts from "../../components/kiss-day/AnimatedHearts";
import LoveNotes from "../../components/kiss-day/LoveNotes";
import CuteBlushAnimation from "../../components/kiss-day/CuteBlushAnimation";
import WhyIAdoreYou from "../../components/kiss-day/WhyIAdoreYou";
import VirtualKissButton from "../../components/kiss-day/VirtualKissButton";

export default function KissDayPage() {
  return (
    <main className="bg-rose-50 min-h-screen overflow-hidden">
      <KissHero />
      <AnimatedHearts />
      <LoveNotes />
      <CuteBlushAnimation />
      <WhyIAdoreYou />
      <VirtualKissButton />
    </main>
  );
}
