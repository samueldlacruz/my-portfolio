import { IProject } from "@interfaces/common/Project";
import programmingIconSrc from "@assets/programming.png";
import SectionCard from "../common/SectionCard";
import { ProjectCard } from "./ProjectCard";

const ProjectsSection = ({ projects }: { projects: IProject[] }) => {

    return (
        <SectionCard
            title="Projects"
            id="projects"
            iconSrc={programmingIconSrc}
        >
            <div className="mt-8 grid md:grid-cols-6 grid-cols-1 gap-5 items-center justify-center">
                {projects && projects?.map((project, index) => (
                    <div key={`user-project-item-${index}`} className="lg:col-span-2 md:col-span-3 col-span-1">
                        <ProjectCard  {...project} />
                    </div>
                ))}
            </div>
        </SectionCard>
    )
}

export default ProjectsSection