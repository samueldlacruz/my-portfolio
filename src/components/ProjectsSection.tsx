import { IProject } from "@interfaces/common/Project";
import programmingIconSrc from "@assets/programming.png";
import SectionCard from "./common/SectionCard";

export const ProjectCard = (props: IProject) => {

    return (
        <div className="project-card">
            <div>
                <div className="w-full border-b border-gray-300/20 py-1">
                    <span className="pl-3 text-xl text-white">{props.name}</span>
                </div>
                <p className="text-lg text-white px-3 py-4">
                    {props.description}
                </p>
            </div>

            <div className="border-t py-1 flex align-center border-gray-300/20">
                {props.links.production && (
                    <a title="production" href={`${props.links.production}`} target="_blank" rel="noopener">
                        <i className="text-white/70 hover:text-white cursor-pointer text-xl pl-3 ri-external-link-line"></i>
                    </a>
                )}

                {props.links.code && (
                    <a title="code" href={`${props.links.code}`} target="_blank" rel="noopener">
                        <i className="text-white/70 hover:text-white cursor-pointer text-xl pl-3 ri-code-s-slash-line"></i>
                    </a>
                )}
            </div>
        </div>
    )
}

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