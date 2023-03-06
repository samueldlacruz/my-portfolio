import { useGetProfileData } from "../hooks/useGetProfileData"
import IExperience from "../interfaces/common/Experience"

export const ExperienceCard = (props: IExperience) => {

    return (
        <article className="shadow-md w-full bg-slate-500/20 flex md:flex-row flex-col justify-between items-center px-4 py-3 rounded-sm">
            <p className="flex flex-col items-start w-full">
                <strong className="text-2xl">{props.role}</strong>
                <span className="text-xl">{props.company}</span>
            </p>
            <hr className="border-white/20 w-full my-2 block md:hidden" />
            <div className="flex flex-col md:items-end items-start w-full">
                <time
                    dateTime={`${props.startDate}${props.endDate ? `/${props.endDate}` : ""}`}
                    className="text-lg"
                >
                    {new Date(props.startDate).toDateString()} - {" "}
                    {props?.endDate ? new Date(props?.endDate).toDateString() : "Present"}
                </time>
                <span className="text-xl">{props.location}</span>
            </div>
        </article>
    )
}


const ExperinceBoard = () => {

    const userExperinces: IExperience[] = useGetProfileData(["experinces"]);

    return (
        <section id="experience" className="h-auto py-20 px-10 justify-center flex md:flex-row flex-col">
            <div className="w-full md:max-w-5xl max-w-3xl">
                <header className="md:text-5xl text-4xl flex items-center font-medium mb-3 border-b-2 border-white/20">
                    <img src="src/assets/business.png" className="h-12" alt="" />
                    <span className="ml-3">Experience</span>
                </header>
                <div className="mt-8 flex flex-col gap-6 items-center justify-center">
                    {userExperinces && userExperinces?.map((experience, index) => (
                        <ExperienceCard key={`user-experience-card-${index}`} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperinceBoard