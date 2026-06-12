import { IProject } from "@/interfaces/common/Project";
import ProjectPreview from "./ProjectPreview";

export const ProjectCard = (props: IProject) => {

    return (
        <div className="project-card overflow-hidden">
            {props.links.production ? (
                <ProjectPreview url={props.links.production} />
            ) : props.links.code ? (
                <a href={props.links.code} target="_blank" rel="noopener noreferrer"
                   className="w-full h-36 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors group">
                    <i className="ri-code-s-slash-line text-white/10 group-hover:text-white/30 text-6xl transition-colors"></i>
                </a>
            ) : null}
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-white/90">{props.name}</span>
                    <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                        props.type === 'work'
                            ? 'text-accent/60 border border-accent/20'
                            : 'text-white/30 border border-white/10'
                    }`}>
                        {props.type}
                    </span>
                </div>
                <p className="text-sm text-white/40 mt-2 leading-relaxed">
                    {props.description}
                </p>
            </div>

            <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex flex-wrap gap-1.5">
                    {props.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-wider text-white/30">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    {props.links.production && (
                        <a title="live demo" href={props.links.production} target="_blank" rel="noopener noreferrer">
                            <i className="text-accent/40 hover:text-accent cursor-pointer text-sm ri-external-link-line transition-colors"></i>
                        </a>
                    )}
                    {props.links.code && (
                        <a title="source code" href={props.links.code} target="_blank" rel="noopener noreferrer">
                            <i className="text-white/30 hover:text-white/70 cursor-pointer text-sm ri-code-s-slash-line transition-colors"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
