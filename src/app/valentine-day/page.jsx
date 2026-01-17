import FinalHero from "../../components/valentine-day/FinalHero";
import FullJourneyTimeline from "../../components/valentine-day/FullJourneyTimeline";
import SpecialMessage from "../../components/valentine-day/SpecialMessage";
import CountdownTimer from "../../components/valentine-day/CountdownTimer";
import LoveSlideshow from "../../components/valentine-day/LoveSlideshow";
import ForeverTogetherMessage from "../../components/valentine-day/ForeverTogetherMessage";
import ProposalAgainButton from "../../components/valentine-day/ProposalAgainButton";

export default function ValentineDayPage() {
  return (
    <main className="bg-pink-50 min-h-screen overflow-hidden">
      <FinalHero />
      <CountdownTimer />
      <FullJourneyTimeline />
      <LoveSlideshow />
      <SpecialMessage />
      {/* <ForeverTogetherMessage /> */}
      <ProposalAgainButton />
    </main>
  );
}
