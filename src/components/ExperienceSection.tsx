
const ExperinceSection = () => {
    return (
        <section id="experience" className="h-screen bg-slate-500/20 py-20 px-10 justify-center flex md:flex-row flex-col">
            <div className="w-full md:max-w-5xl max-w-3xl">
                <h2 className="md:text-5xl text-4xl flex items-center font-medium mb-3 border-b-2 border-white/20">
                    <img src="src/assets/business.png" className="h-12" alt="" />
                    <span className="ml-3">Experience</span>
                </h2>
                <div className="mt-5 flex flex-col gap-6 items-center justify-center">
                    <div className="shadow-md w-full bg-slate-500/20 flex md:flex-row flex-col justify-between items-center px-4 py-3 rounded-sm">
                        <p className="flex flex-col items-start w-full">
                            <strong className="text-2xl">Front End Developer</strong>
                            <span className="text-xl">Media Revolution</span>
                        </p>
                        <hr className="border-white/20 w-full my-2 block md:hidden" />
                        <div className="flex flex-col md:items-end items-start w-full">
                            <span className="text-lg">Dic 2020 - Present</span>
                            <span className="text-xl">Santo Domingo, Dominican Republic</span>
                        </div>
                    </div>
                    <div className="shadow-md w-full bg-slate-500/20 flex md:flex-row flex-col justify-between items-center px-4 py-3 rounded-sm">
                        <p className="flex flex-col items-start w-full">
                            <strong className="text-2xl">Freelance Web Developer</strong>
                            <span className="text-xl">Private clients</span>
                        </p>
                        <hr className="border-white/20 w-full my-2 block md:hidden" />
                        <div className="flex flex-col md:items-end items-start w-full">
                            <span className="text-lg">Jan 2020 - Dic 2020</span>
                            <span className="text-xl">Santo Domingo, Dominican Republic</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperinceSection