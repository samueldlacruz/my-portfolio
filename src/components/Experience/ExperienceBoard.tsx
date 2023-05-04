import IExperience from "@interfaces/common/Experience";
import businessIconSrc from "@assets/business.png";
import SectionCard from "../common/SectionCard";
import { ExperienceCard } from "./ExperienceCard";

const ExperienceBoard = ({ experiences }: { experiences: IExperience[] }) => {

    return (
        <SectionCard
            title="Experience"
            id="experience"
            iconSrc={businessIconSrc}
        >
            <div className="mt-8 flex flex-col gap-6 items-center justify-center">
                {experiences && experiences?.map((experience, index) => (
                    <ExperienceCard key={`user-experience-card-${index}`} {...experience} />
                ))}
            </div>
        </SectionCard>

    )
}

export default ExperienceBoard