import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Demos } from "./components/Demos";
import { Process } from "./components/Process";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <Hero />
      <Services />
      <Benefits />
      <Demos />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}
