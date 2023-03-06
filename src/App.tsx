import AboutMeSection from "./components/AboutMeSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ExperinceBoard from "./components/ExperinceBoard"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <main className="text-white">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ExperinceBoard />
      <ProjectsSection />
    </main>
  )
}

export default App
