import HugHero from "../../components/hug-day/HugHero";
import VirtualHugAnimation from "../../components/hug-day/VirtualHugAnimation";
import ComfortMessage from "../../components/hug-day/ComfortMessage";
import WhyYouFeelLikeHome from "../../components/hug-day/WhyYouFeelLikeHome";
import EmojiReactions from "../../components/hug-day/EmojiReactions";
import SendHugButton from "../../components/hug-day/SendHugButton";

export default function HugDayPage() {
  return (
    <main className="bg-pink-50 min-h-screen">
      <HugHero />
      <VirtualHugAnimation />
      <ComfortMessage />
      <WhyYouFeelLikeHome />
      <EmojiReactions />
      <SendHugButton />
    </main>
  );
}
