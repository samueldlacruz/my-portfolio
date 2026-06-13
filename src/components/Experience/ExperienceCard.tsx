import { useTranslation } from "react-i18next";
import IExperience from "@/interfaces/common/Experience";

export const ExperienceCard = (props: IExperience) => {
    const { t } = useTranslation();

    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <article className="relative pl-10 md:pl-0 pb-16 last:pb-0 group mt-5">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-2.5 h-2.5 rounded-full bg-accent/50 border border-accent/30 group-hover:bg-accent/80 transition-colors duration-300 z-10" />

            <div className="md:flex md:gap-12 md:items-start">
                <div className={`md:w-1/2 ${props.type === 'work' ? 'md:text-right' : 'md:order-last'} mb-3 md:mb-0`}>
                    <time className="text-xs text-white/30 font-light tracking-wider uppercase">
                        {formatDate(props.startDate)}
                        {' — '}
                        {props.endDate ? formatDate(props.endDate) : t('experience.present')}
                    </time>
                </div>

                <div className={`md:w-1/2 ${props.type === 'work' ? 'md:order-last' : ''}`}>
                    <h3 className="text-base font-medium text-white/90">{props.role}</h3>
                    <p className="text-sm text-white/50 mt-1">
                        {props.companyUrl ? (
                            <a href={props.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/70 transition-colors underline underline-offset-2 decoration-accent/30">
                                {props.company}
                            </a>
                        ) : props.company}
                        {props.location && ` · ${props.location}`}
                    </p>
                    <p className="text-sm text-white/40 mt-3 leading-relaxed">{props.description}</p>
                    {props.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {props.technologies.map((tech, i) => (
                                <span key={i} className="text-[11px] uppercase tracking-wider text-accent/50 border border-accent/20 px-2 py-0.5 rounded-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};
