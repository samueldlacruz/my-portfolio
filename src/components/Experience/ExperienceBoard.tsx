import IExperience from "@interfaces/common/Experience";
import ScrollReveal from "../common/ScrollReveal";
import { ExperienceCard } from "./ExperienceCard";

const ExperienceBoard = ({ experiences }: { experiences: IExperience[] }) => {

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-3xl">
                <ScrollReveal>
                    <p className="section-title">// experience</p>
                </ScrollReveal>

                <div className="mt-8 relative">
                    {/* Timeline line */}
                    <div className="timeline-line" />

                    <div className="flex flex-col">
                        {experiences?.map((experience, index) => (
                            <ScrollReveal key={`experience-${index}`} delay={index * 100}>
                                <ExperienceCard {...experience} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceBoard;
