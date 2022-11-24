import AboutMeSection from "./components/AboutMeSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import SkillsSection from "./components/SkillsSection"

function App() {

  return (
    <main className="flex-col h-auto bg-slate-800 text-white">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </main>
  )
}

export default App
