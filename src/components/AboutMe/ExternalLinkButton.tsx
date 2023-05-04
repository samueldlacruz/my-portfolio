import { IExternalLink } from "@/interfaces/ExternalLink"

export const ExternalLinkButton = ({ iconSrc, href, label }: IExternalLink) => {

    return (
        <a
            href={href || "#"}
            target="_blank"
            className="flex gap-3 items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75 hover:cursor-pointer border-slate-50/10 rounded px-5 py-2"
        >
            <span className="text-lg">{label}</span>
            <img src={iconSrc} className="w-8 h-8" alt={`${label} icon`} />
        </a>
    )
}
