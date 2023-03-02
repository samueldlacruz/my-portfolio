
const Header = () => {
    return (
        <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 px-5 w-full">
            <nav>
                <ul className="flex gap-5 text-xl mr-10 items-center">
                    <li className="cursor-pointer"><a href="#aboutMe">About me</a></li>
                    <li className="cursor-pointer"><a href="#experience">Experience</a></li>
                    <li className="cursor-pointer"><a href="#experience">Projects</a></li>
                    <li className="cursor-pointer">
                        <button className="hover:bg-slate-500 bg-slate-500/50 px-4 py-1 rounded-sm">Touch me</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header