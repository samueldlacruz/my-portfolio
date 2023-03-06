import userPicture from '../assets/me.jpg';
import linkedinIconSrc from "../assets/social-media/linkedin.png";
import githubIconSrc from "../assets/social-media/github.png";
import mailIconSrc from "../assets/social-media/mail.png";
// import fileIconSrc from "../assets/file-empty.png";

import hammerIconSrc from '../assets/hammer.png';
import webBugIconSrc from '../assets/web-bug.png';
import ironmanIconSrc from '../assets/iron-man.png';



const AboutMeSection = () => {

    return (
        <section id="aboutMe" className="h-auto gap-10 px-10 py-20 flex md:flex-row flex-col md:items-center items-start md:justify-center justify-start">

            <div className="md:w-9/12 w-full">
                <div className="flex gap-14 lg:flex-row flex-col">
                    <img src={userPicture} className=" h-64 w-64 rounded hover:rotate-0 duration-75 ease-in -rotate-3 border-[0.7rem] border-white" alt="" />

                    <div>
                        <h2 className="md:text-5xl text-3xl font-medium mb-3 border-b-2 border-white/20">About Me</h2>
                        <p className="text-xl mt-5">
                            I started as a teenager by creating a file in my notepad with the EXE extension and the "START" command inside, then I learned HTML, CSS, and javascript, and now I'm a software developer working as a front-end developer.
                        </p>

                        <div className="flex flex-wrap gap-4 flex-row items-center md:justify-between justify-center my-10">
                            <div className="flex gap-3 items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75 hover:cursor-pointer border-slate-50/10 rounded px-2 py-2">
                                <span className="text-lg">See my Projects</span>
                                <img src={githubIconSrc} className="w-8 h-8" alt="" />
                            </div>

                            <div className="flex items-end border-2 hover:bg-slate-50/5 ease-in-out duration-75  border-slate-50/10 rounded px-2 py-2">
                                <span className="text-lg pr-4">Hire Me!</span>
                                <img src={linkedinIconSrc} className="w-8 h-8 hover:cursor-pointer" alt="" />
                                <img src={mailIconSrc} className="w-8 h-8 ml-2 hover:cursor-pointer" alt="" />
                            </div>
                            {/* <div className="flex gap-3 items-end  border-2 hover:bg-slate-50/5 ease-in-out duration-75 hover:cursor-pointer border-slate-50/10 rounded px-2 py-2">
                                <span className="text-lg">My Resume</span>
                                <img src={fileIconSrc} className="w-8 h-8" alt="" />
                            </div> */}
                        </div>

                        <span className="text-lg">Here are a few technologies I’ve been working with recently:</span>
                        <div className="items-center mt-3 justify-center flex md:flex-row flex-col">
                            <div className="flex gap-12 w-full text-base ml-5">
                                <ul className="list-disc">
                                    <li>HTML5 / CSS3</li>
                                    <li>Tailwind CSS </li>
                                    <li>JavaScript ( ES6+)</li>
                                    <li>React.Js ( Next.js )</li>
                                    <li>Vue.Js </li>
                                </ul>
                                <ul className="list-disc">
                                    <li>TypeScript </li>
                                    <li>Node.Js</li>
                                    <li>SQL ( MySQL, Postgres) </li>
                                    <li>API Design Knowledge</li>
                                </ul>
                            </div>

                            <div className="flex flex-col md:mt-0 mt-4 items-center">
                                <div className="flex">
                                    <div className="w-20 h-20">
                                        <img src={hammerIconSrc} className="hover:-rotate-6 duration-75" />
                                    </div>
                                    <div className="w-20 h-20 rotate-6 hover:-rotate-12 duration-100">
                                        <img src={webBugIconSrc} />
                                    </div>
                                </div>

                                <div className="w-20 h-20 mt-3 -rotate-12 hover:rotate-12 hover:scale-[1.04] duration-75">
                                    <img src={ironmanIconSrc} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection