import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import TeddyHero from "../../components/teddy-day/TeddyHero";
import TeddyHugAnimation from "../../components/teddy-day/TeddyHugAnimation";
import MessageFromTeddy from "../../components/teddy-day/MessageFromTeddy";
import CutePromises from "../../components/teddy-day/CutePromises";
import GalleryWithTeddy from "../../components/teddy-day/GalleryWithTeddy";
import SendVirtualHug from "../../components/teddy-day/SendVirtualHug";

export default function TeddyDayPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-white">
      <FloatingHearts />
      <TeddyHero />
      <TeddyHugAnimation />
      <MessageFromTeddy />
      <CutePromises />
      <GalleryWithTeddy />
      <SendVirtualHug />
    </main>
  );
}

