import FinalHero from "../../components/valentine-day/FinalHero";
import FullJourneyTimeline from "../../components/valentine-day/FullJourneyTimeline";
import SpecialMessage from "../../components/valentine-day/SpecialMessage";
import CountdownTimer from "../../components/valentine-day/CountdownTimer";
import LoveSlideshow from "../../components/valentine-day/LoveSlideshow";
import ForeverTogetherMessage from "../../components/valentine-day/ForeverTogetherMessage";
import ProposalAgainButton from "../../components/valentine-day/ProposalAgainButton";
import OurStoryTimeline from "../../components/valentine-day/OurStoryTimeline";
import LittleMoments from "../../components/valentine-day/LittleMoments";
import LoveLetter from "../../components/valentine-day/LoveLetter";
import WhyIChooseYou from "../../components/valentine-day/WhyIChooseYou";
import MemoryGallery from "../../components/valentine-day/ImageGallary";
import UltimateValentineHeart from "../../components/valentine-day/ValentineHeart";

export default function ValentineDayPage() {
  return (
    <main className=" min-h-screen overflow-hidden">
      <FinalHero />
      <CountdownTimer />
      <OurStoryTimeline/>
      <LittleMoments/>
      {/* <FullJourneyTimeline /> */}
      {/* <LoveSlideshow /> */}
      <MemoryGallery/>
      <LoveLetter/>
      <WhyIChooseYou/>
      <UltimateValentineHeart/>
      {/* <SpecialMessage /> */}
      {/* <ForeverTogetherMessage /> */}
      <ProposalAgainButton />
    </main>
  );
}
