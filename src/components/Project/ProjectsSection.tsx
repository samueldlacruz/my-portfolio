import { IProject } from "@interfaces/common/Project";
import ScrollReveal from "../common/ScrollReveal";
import { ProjectCard } from "./ProjectCard";

const ProjectsSection = ({ projects }: { projects: IProject[] }) => {

    const personalProjects = projects?.filter(p => p.type === 'personal') || [];
    const workProjects = projects?.filter(p => p.type === 'work') || [];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-3xl">
                <ScrollReveal>
                    <p className="section-title">// projects</p>
                </ScrollReveal>

                {workProjects.length > 0 && (
                    <div className="mt-8">
                        <ScrollReveal>
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white/30"></span>
                                Work Projects
                            </h3>
                        </ScrollReveal>
                        <div className="grid md:grid-cols-2 gap-4">
                            {workProjects.map((project, index) => (
                                <ScrollReveal key={`work-${index}`} delay={index * 80}>
                                    <ProjectCard {...project} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}

                {personalProjects.length > 0 && (
                    <div className="mt-12">
                        <ScrollReveal>
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full border border-white/30"></span>
                                Personal Projects
                            </h3>
                        </ScrollReveal>
                        <div className="grid md:grid-cols-2 gap-4">
                            {personalProjects.map((project, index) => (
                                <ScrollReveal key={`personal-${index}`} delay={index * 80}>
                                    <ProjectCard {...project} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
