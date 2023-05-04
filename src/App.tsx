
import fileIconSrc from "@assets/file-empty.png"
import { useProfile } from "@contexts/profile/hooks/useProfile"
import Header from "@components/Header"
import HeroSection from "@components/HeroSection"
import AboutMeSection from "@components/AboutMeSection"
import ExperienceBoard from "@components/ExperienceBoard"
import ProjectsSection from "@components/ProjectsSection"
import { socialMediaIcons } from "@utils/socialMediaIcons"

const App = () => {

  const {
    user: userInfo, app: appConfig,
    projects, experiences
  } = useProfile()

  const externalLinks = () => {

    let externalLinkLabels: { [key: string]: string } = {
      "github": "my projects",
      "linkedin": "Hire me!"
    }

    let links = [{ label: "My Resume", iconSrc: fileIconSrc, href: userInfo?.currinculumUrl }]

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

      {(experiences && experiences.length !== 0) && (
        <ExperienceBoard experiences={experiences} />
      )}

      {(projects && projects.length !== 0) && (
        <ProjectsSection projects={projects} />
      )}

      {/* Footer */}
      <div className="flex flex-col mt-1 items-center justify-center w-full mb-4">
        <span className="mb-2">&copy; all rights reserved</span>
        {appConfig?.logoUrl && (
          <img
            src={appConfig?.logoUrl}
            className="md:w-10 md:h-10 h-8 w-8 opacity-25"
            alt="logo"
          />
        )}
        {userInfo?.fullName && <small className="mt-3">{userInfo?.fullName}</small>}
      </div>
    </main>
  )
}

export default App