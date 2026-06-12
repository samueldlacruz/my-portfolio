import { INavigationItem } from "@interfaces/NavigationItem";
import { useState } from "react";

const HeaderNavigation = ({ items }: { items: INavigationItem[] }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = items.map((item, index) => (
        <li key={`headerNavigation-menu-item-${index}`} className="cursor-pointer">
            <a
                href={item.href}
                onClick={handleToggle}
                className={`${item.className ? item.className : ''} text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors`.trim()}
            >
                {item?.label}
            </a>
        </li>
    ));

    return (
        <nav>
            <ul className="hidden md:flex md:gap-6 gap-[0.3rem] items-center">
                {menuItems}
            </ul>

            <div className="items-center justify-between py-4 flex md:hidden">
                <div className="flex items-center">
                    <button className="text-white/40 hover:text-white focus:outline-none transition-colors" onClick={handleToggle}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`fixed inset-0 transition-all duration-300 ease-out text-2xl bg-[#0a0a0a]/98 h-screen w-full z-50 px-8 py-4 flex flex-col justify-center ${isOpen ? 'block' : 'hidden'}`}>
                    <button className="text-white/40 hover:text-white absolute right-4 top-4 transition-colors" onClick={handleToggle}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.3 5.7a1 1 0 00-1.4 0L12 10.6 7.1 5.7a1 1 0 00-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 001.4 1.4L12 13.4l4.9 4.9a1 1 0 001.4-1.4L13.4 12l4.9-4.9a1 1 0 000-1.4z" />
                        </svg>
                    </button>
                    <ul className="flex items-center justify-center flex-col gap-8">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavigation
