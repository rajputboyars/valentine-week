import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import ProposalHero from "../../components/propose-day/ProposalHero";
import Timeline from "../../components/propose-day/Timeline";
import WhyIChooseYou from "../../components/propose-day/WhyIChooseYou";
import AnimatedYesNo from "../../components/propose-day/AnimatedYesNo";
import LoveLetter from "../../components/propose-day/LoveLetter";
import FinalQuestion from "../../components/propose-day/FinalQuestion";

export default function ProposeDayPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-white">
      <FloatingHearts />
      <ProposalHero />
      <Timeline />
      <WhyIChooseYou />
      <AnimatedYesNo />
      <LoveLetter />
      <FinalQuestion />
    </main>
  );
}
