import DOMPurify from 'dompurify';
import hammerIconSrc from '@assets/hammer.png';
import ironManIconSrc from '@assets/iron-man.png';
import webBugIconSrc from '@assets/web-bug.png';
import { IExternalLink } from '@interfaces/ExternalLink';
import { ISkill } from '@interfaces/common/Skill';
import { LIMIT_SKILLS_PER_COLUMN } from '@constants/skills.constants';
import { chunker } from '@utils/chunker';
import { joinWithSeparator } from '@utils/joinWithSeparator';
import { ExternalLinkButton } from './ExternalLinkButton';

const AboutMeSection = (
    {
        personalDetails,
        skills,
        externalLinks
    }: {
        skills: ISkill[],
        personalDetails: { aboutMe: string, userPicture: string },
        externalLinks: IExternalLink[]
    }) => {


    const listSkills = (list: ISkill[]) => list.map((skill, index: number) =>
        <li key={`skill-item-${index}`} className="whitespace-nowrap">
            {skill.skill}{" "}
            <small className="md:inline-block hidden">{(skill.specifics && skill.specifics.length !== 0) && `( ${joinWithSeparator(skill.specifics)} )`}</small>
        </li>
    );

    const sanitizedDescription = () => ({
        __html: DOMPurify.sanitize(personalDetails.aboutMe)
    })

    return (
        <section id="aboutMe" className="h-auto gap-10 px-10 py-20 flex md:flex-row flex-col md:items-center items-start md:justify-center justify-start">
            <div className="md:w-9/12 w-full">
                <div className="flex gap-14 lg:flex-row flex-col">
                    <img src={personalDetails.userPicture} className="h-64 w-64 min-w-[269px] object-fill bg-top rounded hover:rotate-0 duration-75 ease-in -rotate-3 border-[0.7rem] border-white" alt="user's profile picture" />

                    <div>
                        <h2 className="md:text-5xl text-3xl font-medium mb-3 border-b-2 border-white/20">About Me</h2>
                        <p className="text-xl mt-5" dangerouslySetInnerHTML={sanitizedDescription()}></p>

                        <div className="flex gap-4 flex-wrap flex-row items-center md:justify-around justify-center my-10">
                            {externalLinks.map((item: IExternalLink, index: number) => <ExternalLinkButton key={`external-link-button-${index}`} {...item} />)}
                        </div>

                        <span className="text-lg">Here are a few technologies I’ve been working with recently:</span>

                        <div className="items-center mt-3 justify-center flex md:flex-row flex-col">

                            <div className="flex flex-wrap gap-12 w-full md:text-lg  text-base ml-5">
                                {chunker<ISkill>(skills, LIMIT_SKILLS_PER_COLUMN).map((chunk, index: number) => (
                                    <ul key={`list-of-skill-chunk-${index}`} className="list-disc">
                                        {listSkills(chunk)}
                                    </ul>
                                ))}
                            </div>

                            <div className="flex flex-col md:mt-0 mt-10 items-center">
                                <div className="flex">
                                    <div className="w-20 h-20">
                                        <img src={hammerIconSrc} className="hover:-rotate-6 duration-75" />
                                    </div>
                                    <div className="w-20 h-20 rotate-6 hover:-rotate-12 duration-100">
                                        <img src={webBugIconSrc} />
                                    </div>
                                </div>

                                <div className="w-20 h-20 mt-3 -rotate-12 hover:rotate-12 hover:scale-[1.04] duration-75">
                                    <img src={ironManIconSrc} />
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