import AboutMeSection from "./components/AboutMeSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ExperinceSection from "./components/ExperienceSection"

function App() {

  return (
    <main className="flex-col h-auto bg-slate-800 text-white">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ExperinceSection />
    </main>
  )
}

export default App
