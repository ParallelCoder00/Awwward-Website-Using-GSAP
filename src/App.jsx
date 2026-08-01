import NavBar from "./Components/NavBar";
import HeroSection from "./Sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./Sections/MessageSection";
import FlavorSection from "./Sections/FlavorSection";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
    </main>
  );
}

export default App;
