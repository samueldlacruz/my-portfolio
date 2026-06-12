
import fileIconSrc from "@assets/file-empty.png"
import { useProfile } from "@contexts/profile/hooks/useProfile"
import Header from "@components/Header"
import HeroSection from "@components/HeroSection"
import AboutMeSection from "@/components/AboutMe/AboutMeSection"
import CertificatesSection from "@/components/Certificates/CertificatesSection"
import ExperienceBoard from "@/components/Experience/ExperienceBoard"
import ProjectsSection from "@/components/Project/ProjectsSection"
import { socialMediaIcons } from "@utils/socialMediaIcons"

const App = () => {

  const {
    user: userInfo, app: appConfig,
    projects, experiences, certificates
  } = useProfile()

  const externalLinks = () => {

    let externalLinkLabels: { [key: string]: string } = {
      "github": "GitHub",
      "linkedin": "LinkedIn"
    }

    let links = [{ label: "Resume", iconSrc: fileIconSrc, href: userInfo?.currinculumUrl }]

    let socialMedias = userInfo?.socialMedias.map((socialMedia: { name: string, link: string }) => ({
      label: externalLinkLabels[socialMedia.name] || socialMedia.name,
      iconSrc: socialMediaIcons[socialMedia.name],
      href: socialMedia.link
    }))

    return [...socialMedias || [], ...links]
  }


  return (

    <main className="text-white">
      <Header
        userEmail={userInfo?.email}
        {...(appConfig?.logoUrl) ? { logoUrl: appConfig?.logoUrl } : {}}
      />

      {userInfo && (
        <HeroSection fullName={userInfo?.fullName} roles={userInfo?.roles} />
      )}

      {userInfo && (
        <AboutMeSection
          personalDetails={{ aboutMe: userInfo?.aboutMe, userPicture: userInfo?.picture }}
          skills={userInfo?.skills}
          externalLinks={externalLinks()}
        />
      )}

      {(certificates && certificates.length !== 0) && (
        <CertificatesSection certificates={certificates} />
      )}

      {(experiences && experiences.length !== 0) && (
        <ExperienceBoard experiences={experiences} />
      )}

      {(projects && projects.length !== 0) && (
        <ProjectsSection projects={projects} />
      )}

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center w-full py-16 border-t border-white/5">
        <span className="text-xs text-white/20 tracking-wider">&copy; {new Date().getFullYear()} Samuel de la Cruz G.</span>
      </footer>
    </main>
  )
}

export default App
