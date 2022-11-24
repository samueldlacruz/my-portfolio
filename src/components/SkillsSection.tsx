
const SkillsSection = () => {
    return (
        <section id="skills" className="h-screen gap-10 bg-slate-500/20 pt-5 items-center justify-center flex md:flex-row flex-col">
            <div>
                <h2 className="md:text-6xl text-3xl font-medium mb-3 border-b-2 border-white/20">Skills</h2>
                <div className="flex gap-14 text-lg ml-5">
                    <ul className="list-disc">
                        <li>HTML5 / CSS3</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS </li>
                        <li>JavaScript ( ES6+) </li>
                        <li>React.Js ( Next.js ) </li>
                        <li>TypeScript </li>
                    </ul>
                    <ul className="list-disc">
                        <li>Vue.Js (2 and 3) </li>
                        <li>Node.Js</li>
                        <li>Redux </li>
                        <li>SQL ( MySQL, Postgres) </li>
                        <li>API Design Knowledge</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex">
                    <div className="w-24 h-24">
                        <img src="src/assets/hammer.png" className="hover:-rotate-6 duration-75" />
                    </div>
                    <div className="w-24 h-24 rotate-6 hover:-rotate-12 duration-100">
                        <img src="src/assets/web-bug.png" />
                    </div>
                </div>

                <div className="w-24 h-24 mt-3 -rotate-12 hover:rotate-12 hover:scale-[1.04] duration-75">
                    <img src="src/assets/iron-man.png" />
                </div>
            </div>
        </section>
    )
}

export default SkillsSection