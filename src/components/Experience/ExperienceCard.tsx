import IExperience from "@/interfaces/common/Experience"

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