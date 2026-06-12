import { ICertificate } from "@/interfaces/common/Certificate";

export const CertificateCard = (props: ICertificate) => {

    const formatDate = (date: string) => {
        const [year, month] = date.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[parseInt(month) - 1]} ${year}`;
    };

    return (
        <div className="border border-white/10 rounded-md p-4 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex-1">
                    <h3 className="text-base font-medium text-white/90">{props.title}</h3>
                    <p className="text-sm text-white/40 mt-1">{props.issuer}</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1">
                    <time className="text-xs text-white/30">
                        {formatDate(props.issueDate)}
                        {props.expireDate && ` - ${formatDate(props.expireDate)}`}
                    </time>
                    {props.credentialUrl && (
                        <a
                            href={props.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent/70 hover:text-accent transition-colors"
                        >
                            show credential
                        </a>
                    )}
                </div>
            </div>

            {props.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {props.skills.map((skill, i) => (
                        <span key={i} className="text-[11px] uppercase tracking-wider text-white/60 px-2 py-0.5">
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
