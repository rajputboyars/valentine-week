import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import PromiseHero from "../../components/promise-day/PromiseHero";
import PromiseCards from "../../components/promise-day/PromiseCards";
import TimelinePromises from "../../components/promise-day/TimelinePromises";
import ForeverMessage from "../../components/promise-day/ForeverMessage";
import HeartAnimation from "../../components/promise-day/HeartAnimation";
import PromiseButton from "../../components/promise-day/PromiseButton";

export default function PromiseDayPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-white">
      <FloatingHearts />
      <PromiseHero />
      <PromiseCards />
      <TimelinePromises />
      <ForeverMessage />
      <HeartAnimation />
      <PromiseButton />
    </main>
  );
}
