import SKeyIconSrc from '../assets/s-key.png';
import { INavigationItem } from '../interfaces/components/NavigationItem';
import HeaderNavigation from './HeaderNavigation';

const Header = ({ userEmail, logoUrl }: { userEmail?: string, logoUrl: string }) => {

    const appMenuItems: Array<INavigationItem> = [
        {
            href: "#aboutMe",
            label: "About me"
        },
        {
            href: "#experience",
            label: "Experience"
        },
        {
            href: "#projects",
            label: "Projects"
        },
        ...(userEmail) ? [{
            href: `mailto:${userEmail}`,
            label: "Get In Touch",
            className: "hover:bg-slate-500 bg-slate-500/50 px-4 py-1 rounded-sm"
        }] : []
    ]

    return (
        <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 md:px-5 px-2 w-full">
            <div className="w-full flex items-center justify-between">
                
                <a href="/">
                    <img src={logoUrl} className="md:w-12 md:h-12 h-8 w-8 ease-out duration-75 opacity-50 hover:opacity-100" alt="logo" />
                </a>
                
                <div className="flex items-center gap-4">
                    <a
                        href={`mailto:${userEmail}`}
                        className={"hover:bg-slate-500 block md:hidden cursor-pointer bg-slate-500/50 px-4 py-1 rounded-sm"}
                    >
                        Get In Touch
                    </a>
                    <HeaderNavigation items={appMenuItems} />
                </div>
            </div>
        </header>
    )
}

export default Header