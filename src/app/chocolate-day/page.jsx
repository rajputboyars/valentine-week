import ChocolateRain from "../../components/chocolate-day/ChocolateRain";
import ChocolateFlavors from "../../components/chocolate-day/ChocolateFlavors";
import SweetMemories from "../../components/chocolate-day/SweetMemories";
import WhyYouAreSweeter from "../../components/chocolate-day/WhyYouAreSweeter";
import VirtualChocolateGift from "../../components/chocolate-day/VirtualChocolateGift";
import CuteQuoteSection from "../../components/chocolate-day/CuteQuoteSection";

export default function ChocolateDayPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      <ChocolateRain />
      <ChocolateFlavors />
      <SweetMemories />
      <WhyYouAreSweeter />
      <VirtualChocolateGift />
      <CuteQuoteSection />
    </main>
  );
}
