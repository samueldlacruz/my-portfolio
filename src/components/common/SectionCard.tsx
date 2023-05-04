import { ReactNode } from "react";

type SectionCardPropsI = {
    children: ReactNode;
    id: string;
    title: string;
    iconSrc?: string;
};

const SectionCard = ({ id, title, iconSrc, className, children, ...restProps }: SectionCardPropsI & React.HTMLAttributes<HTMLElement>) => {

    return (
        <section
            id={id}
            className={`${className ?? ""} md:h-screen h-auto py-20 md:px-10 px-6 justify-center flex md:flex-row flex-col`}
            {...restProps}
        >
            <div className="w-full md:max-w-5xl max-w-3xl">
                <h2 className="md:text-5xl text-4xl flex items-center font-medium mb-3 border-b-2 border-white/20">
                    {iconSrc && (
                        <img src={iconSrc} className="h-12" alt={`section ${id} icon`} />
                    )}
                    <span className="ml-3">{title}</span>
                </h2>

                {children}
            </div>
        </section>
    );
};

export default SectionCard;
