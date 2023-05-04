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
                className={`${item.className ? item.className : ''}`.trim()}
            >
                {item?.label}
            </a>
        </li>
    ));



    return (
        <nav>
            <ul className="hidden md:flex md:gap-5 gap-[0.3rem] lg:text-xl md:text-lg text-base mr-0 items-center">
                {menuItems}
            </ul>

            <div className="items-center justify-between py-4 flex md:hidden">
                <div className="flex items-center">
                    <button className="text-gray-400 group-hover:text-white hover:text-gray-100 focus:outline-none focus:text-gray-600" onClick={handleToggle}>
                        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
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
                <div className={`absolute inset-y-0 right-0  transition-all duration-500 ease-out text-2xl bg-slate-800/95 h-screen w-full z-50 px-8 py-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <i className="text-white absolute right-2 ri-close-fill text-3xl" onClick={handleToggle}></i>
                    <ul className="flex items-center justify-center h-full flex-col gap-10">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavigation