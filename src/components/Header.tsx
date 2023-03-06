
import { useGetProfileData } from '../hooks/useGetProfileData';
import { INavigationItem } from '../interfaces/components/NavigationItem';

const HeaderNavigation = ({ items }: { items: INavigationItem[] }) => {

    const menuItems = (items: INavigationItem[]) => {
        let _items = items.map((item, index) => (
            <li key={`headerNavigation-menu-item-${index}`} className="cursor-pointer">
                <a
                    href={item.href}
                    className={`${item.className ? item.className : ''}`.trim()}
                >
                    {item?.label}
                </a>
            </li>
        ));

        return _items;
    }

    return (
        <nav>
            <ul className="flex gap-5 lg:text-xl md:text-lg text-base mr-0 items-center">
                {menuItems(items)}
            </ul>
        </nav>
    )
}

const Header = () => {

    const userEmail = useGetProfileData(["user", "email"])

    const AppMenuItems: Array<INavigationItem> = [
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
        {
            href: `mailto:${userEmail}`,
            label: "Get In Touch",
            className: "hover:bg-slate-500 bg-slate-500/50 px-4 py-1 rounded-sm"
        }
    ]

    return (
        <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 px-5 w-full">
            <HeaderNavigation items={AppMenuItems} />
        </header>
    )
}

export default Header