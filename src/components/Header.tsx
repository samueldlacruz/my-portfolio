import { INavigationItem } from "@interfaces/NavigationItem"
import HeaderNavigation from "./HeaderNavigation"


const Header = ({ userEmail, logoUrl }: { userEmail?: string, logoUrl?: string }) => {

    const appMenuItems: Array<INavigationItem> = [
        {
            href: "#aboutMe",
            label: "About"
        },
        {
            href: "#certificates",
            label: "Certs"
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
            label: "Contact",
            className: "border border-white/20 hover:bg-white/10 px-4 py-1 rounded-sm transition-colors"
        }] : []
    ]

    return (
        <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-[#0a0a0a]/80 py-3 md:px-5 px-2 w-full">
            <div className="w-full flex items-center justify-between">

                <div>
                    {logoUrl && (
                        <a href="/">
                            <img src={logoUrl} className="md:w-8 md:h-8 h-8 w-8 opacity-40 hover:opacity-100 transition-opacity" alt="logo" />
                        </a>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={`mailto:${userEmail}`}
                        className="border border-white/20 hover:bg-white/10 px-4 py-1 rounded-sm transition-colors hidden md:block"
                    >
                        Contact
                    </a>
                    <HeaderNavigation items={appMenuItems} />
                </div>
            </div>
        </header>
    )
}

export default Header
