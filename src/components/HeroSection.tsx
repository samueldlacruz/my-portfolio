import { joinWithSeparator } from "../utils/joinWithSeparator";

const HeroSection = ({ fullName, roles }: { fullName: string, roles: string[] }) => {

    return (
        <section id="#" className="h-screen bg-hero bg-slate-800 overflow-hidden  relative flex justify-center items-center">
            <div className="text-center">
                <h1 className="lg:text-6xl md:text-5xl text-4xl md:font-semibold font-bold border-b-2 border-white/20 mb-2">{fullName}</h1>
                <h5 className="lg:text-4xl md:text-3xl text-xl font-medium">{joinWithSeparator(roles as string[], '/')}</h5>
            </div>
        </section>
    )
}

export default HeroSection