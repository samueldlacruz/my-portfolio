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
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appConfig?.title}</title>
            <link
              rel="canonical"
              href={appConfig?.url}
            />
          <link rel="icon" type="image/png" href={appConfig.logoUrl} />
          <meta name="description" content={appConfig?.description} />
          <meta name={userInfo?.fullName} content="Author name" />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemProp="name" content={appConfig?.name} />
          <meta itemProp="description" content={appConfig?.description} />
          <meta itemProp="image" content={appConfig?.logoUrl} />
          
          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content={appConfig?.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${userInfo?.fullName}'s portfolio`} />
          <meta
            property="og:description"
            content={appConfig?.description}
          />
          <meta property="og:image" content={userInfo?.picture} />
        </Helmet>

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
      </HelmetProvider>
    </>
  )
}

export default App