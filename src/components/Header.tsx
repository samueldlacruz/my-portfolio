
const Header = () => {
    return (
        <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 px-5 w-full">
            <nav>
                <ul className="flex gap-5 text-xl mr-10">
                    <li className="cursor-pointer"><a href="#aboutMe">About me</a></li>
                    <li className="cursor-pointer"><a href="#skills">Skills</a></li>
                    <li className="cursor-pointer">Touch me</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header