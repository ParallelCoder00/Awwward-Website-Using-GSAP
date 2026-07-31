import NavBar from './Components/NavBar'
import HeroSection from './Sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <div className='h-dvh border border-red-500'/>
    </main>
  )
}

export default App