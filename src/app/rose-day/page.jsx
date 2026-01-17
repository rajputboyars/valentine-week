import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import HeroSection from "../../components/rose-day/HeroSection";
import RoseTypes from "../../components/rose-day/RoseTypes";
import WhyYouAreMyRose from "../../components/rose-day/WhyYouAreMyRose";
import MemoryGallery from "../../components/rose-day/MemoryGallery";
import LoveMessage from "../../components/rose-day/LoveMessage";
import GiftButton from "../../components/rose-day/GiftButton";

export default function RoseDayPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-white">
      <FloatingHearts />
      <HeroSection />
      <RoseTypes />
      <WhyYouAreMyRose />
      <MemoryGallery />
      <LoveMessage />
      <GiftButton />
    </main>
  );
}
