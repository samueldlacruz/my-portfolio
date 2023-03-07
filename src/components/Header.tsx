import SKeyIconSrc from '../assets/s-key.png';
import { INavigationItem } from '../interfaces/components/NavigationItem';

const HeaderNavigation = ({ items }: { items: INavigationItem[] }) => {

    const menuItems = items.map((item, index) => (
        <li key={`headerNavigation-menu-item-${index}`} className="cursor-pointer">
            <a
                href={item.href}
                className={`${item.className ? item.className : ''}`.trim()}
            >
                {item?.label}
            </a>
        </li>
    ));

    return (
        <nav>
            <ul className="flex gap-5 lg:text-xl md:text-lg text-base mr-0 items-center">
                {menuItems}
            </ul>
        </nav>
    )
}

const Header = ({ userEmail }: { userEmail?: string }) => {

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
        <header className="fixed group z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 md:px-5 px-2 w-full">
            <div className="w-full flex items-center justify-between">
                <a href="#">
                    <img src={SKeyIconSrc} className="md:w-12 md:h-12 h-8 w-8 ease-out duration-75 opacity-25 group-hover:opacity-100" alt="" />
                </a>
                <HeaderNavigation items={appMenuItems} />
            </div>
        </header>
    )
}

export default Header