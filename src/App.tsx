import AboutMeSection from "./components/AboutMeSection"
import ExperinceBoard from "./components/ExperinceBoard"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import { useGetProfileData } from "./hooks/useGetProfileData"
import { socialMediaIcons } from "./utils/socialMediaIcons"

import { Helmet, HelmetProvider } from "react-helmet-async"
import fileIconSrc from "./assets/file-empty.png"
import IExperience from "./interfaces/common/Experience"
import { IProject } from "./interfaces/common/Project"

function App() {

  const userInfo = useGetProfileData(["user"])
  const appConfig = useGetProfileData(["app"])

  const userExperinces: IExperience[] = useGetProfileData(["experinces"]);
  const projects: IProject[] = useGetProfileData(["projects"]);

  const externalLinks = () => {

    let externalLinkLabels: { [key: string]: string } = {
      "github": "See My Projects",
      "linkedin": "Hire Me!"
    }

    let links = [{ label: "My Resume", iconSrc: fileIconSrc, href: userInfo.currinculumUrl }]

    let socialMedias = userInfo.socialMedias.map((socialMedia: { name: string, link: string }) => ({
      label: externalLinkLabels[socialMedia.name] || socialMedia.name,
      iconSrc: socialMediaIcons[socialMedia.name],
      href: socialMedia.link
    }))

    return [...socialMedias, ...links]
  }


  return (

    <main className="text-white">
      <Header
        userEmail={userInfo.email}
        logoUrl={appConfig.logoUrl}
      />

      <HeroSection fullName={userInfo.fullName} roles={userInfo.roles} />

      <AboutMeSection
        personalDetails={{ aboutMe: userInfo.aboutMe, userPicture: userInfo?.picture }}
        skills={userInfo.skills}
        externalLinks={externalLinks()}
      />

      <ExperinceBoard experiences={userExperinces} />

      <ProjectsSection projects={projects} />

      {/* Footer */}
      <div className="flex flex-col mt-1 items-center justify-center w-full mb-4">
        <span className="mb-2">&copy; all rights reserved</span>
        <img src={appConfig.logoUrl} className="md:w-10 md:h-10 h-8 w-8 opacity-25" alt="logo" />
        <small className="mt-3">{userInfo.fullName}</small>
      </div>
    </main>
  )
}

export default App