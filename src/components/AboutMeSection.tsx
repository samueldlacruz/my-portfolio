
const AboutMeSection = () => {

    return (
        <section id="aboutMe" className="h-auto gap-10 px-10 bg-slate-700/20 py-20 flex md:flex-row flex-col md:items-center items-start md:justify-center justify-start">

            <img src="src/assets/me.jpg" className=" h-64 w-64 rounded hover:rotate-0 duration-75 ease-in -rotate-3 border-[0.7rem] border-white" alt="" />

            <div className="md:w-6/12 w-full">
                <h2 className="md:text-6xl text-3xl font-medium mb-3 border-b-2 border-white/20">About me</h2>
                <p className="text-xl mt-5">
                    I started as a teenager by creating a file in my notepad with the EXE extension and the "START" command inside, then I learned HTML, CSS, and javascript, and now I'm a software developer working as a front-end developer.
                </p>

                <div className="flex flex-wrap md:flex-row flex-col-reverse items-center mb-10 justify-between mt-10">
                    <div className="flex md:mt-0 mt-3 gap-3 items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75 hover:cursor-pointer border-slate-50/10 rounded px-2 py-2">
                        <span className="text-lg">See my Projects</span>
                        <img src="src/assets/social-media/github.png" className="w-8 h-8" alt="" />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75  border-slate-50/10 rounded px-2 py-2">
                            <span className="text-lg pr-4">Hire Me!</span>
                            <img src="src/assets/social-media/linkedin.png" className="w-8 h-8 hover:cursor-pointer" alt="" />
                            <img src="src/assets/social-media/mail.png" className="w-8 h-8 ml-2 hover:cursor-pointer" alt="" />
                        </div>
                        <div className="flex gap-3 items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75 hover:cursor-pointer border-slate-50/10 rounded px-2 py-2">
                            <span className="text-lg">My Resume</span>
                            <img src="src/assets/file-empty.png" className="w-8 h-8" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection