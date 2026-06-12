import { joinWithSeparator } from "@utils/joinWithSeparator"

const HeroSection = ({ fullName, roles }: { fullName: string, roles: string[] }) => {

    return (
        <section id="#" className="h-screen bg-hero overflow-hidden relative flex justify-center items-center">
            <div className="text-center px-6">
                <h1 className="lg:text-7xl md:text-6xl text-4xl font-light tracking-tight mb-4">
                    {fullName}
                </h1>
                <div className="w-12 h-px bg-accent/30 mx-auto my-6"></div>
                <h5 className="lg:text-xl md:text-lg text-base font-light text-white/50 uppercase tracking-[0.2em]">
                    {joinWithSeparator(roles as string[], ' / ')}
                </h5>
                <div className="mt-16 animate-bounce">
                    <i className="ri-arrow-down-line text-white/20 text-xl"></i>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
