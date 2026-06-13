import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import { IExternalLink } from '@interfaces/ExternalLink';
import { ISkill } from '@interfaces/common/Skill';
import { joinWithSeparator } from '@utils/joinWithSeparator';
import { ExternalLinkButton } from './ExternalLinkButton';
import ScrollReveal from '../common/ScrollReveal';

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

    const { t } = useTranslation();

    const listSkills = (list: ISkill[]) => list.map((skill, index: number) =>
        <li key={`skill-item-${index}`} className="whitespace-nowrap text-sm text-white/60">
            <span className="text-accent/70 mr-2">{'>'}</span>
            {skill.skill}
            {(skill.specifics && skill.specifics.length !== 0) && (
                <span className="text-white/40">({joinWithSeparator(skill.specifics)})</span>
            )}
        </li>
    );

    const sanitizedDescription = () => ({
        __html: DOMPurify.sanitize(personalDetails.aboutMe)
    })

    return (
        <section id="aboutMe" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-3xl">
                <ScrollReveal>
                    <p className="section-title">{t('about.title')}</p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={personalDetails.userPicture}
                            className="h-36 w-36 rounded-full object-cover border border-white/10 mb-8"
                            alt="profile"
                        />
                        <p
                            className="text-lg text-white/60 leading-relaxed max-w-xl"
                            dangerouslySetInnerHTML={sanitizedDescription()}
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="flex gap-4 flex-wrap items-center justify-center my-10">
                        {externalLinks.map((item: IExternalLink, index: number) =>
                            <ExternalLinkButton key={`external-link-button-${index}`} {...item} />
                        )}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                    <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent/70 mb-4">
                            {t('about.technologies')}
                        </p>
                        <div className="flex flex-wrap gap-x-10 gap-y-2">
                            {listSkills(skills)}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default AboutMeSection;
