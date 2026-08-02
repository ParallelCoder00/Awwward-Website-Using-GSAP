import NavBar from "./Components/NavBar";
import HeroSection from "./Sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./Sections/MessageSection";
import FlavorSection from "./Sections/FlavorSection";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./Sections/NutritionSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection/>
        </div>
      </div>
    </main>
  );
}

export default App;
