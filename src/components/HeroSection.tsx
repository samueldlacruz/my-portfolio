
const HeroSection = () => {

    return (
        <section className="h-screen overflow-hidden  relative flex justify-center items-center">
            <div className="absolute top-20 right-0 h-24 w-36 rotate-12">
                <img src="src/assets/dominican-republic-flag.png" />
            </div>
            <div className="absolute top-16 left-10 h-24 w-36 rotate-12">
                <img src="src/assets/programming.png" />
            </div>
            <div className="absolute inset-x-4 lg:block hidden bottom-4 h-24 w-36 rotate-12">
                <img src="src/assets/data.png" />
            </div>
            <div className="absolute md:bottom-6 bottom-3 lg:block hidden md:right-2 h-24 w-24 -rotate-45">
                <img src="src/assets/hands/hand-scissors.png" />
            </div>

            <div className="text-center">
                <h1 className="md:text-6xl text-4xl md:font-semibold font-bold border-b-2 border-white/20 mb-2">Samuel de la Cruz G.</h1>
                <h5 className="md:text-3xl text-2xl font-medium">Software / Front-End Developer</h5>
            </div>

            <div className="absolute bottom-5 mr-20 gap-1 flex h-24 w-24">
                <img src="src/assets/got-stark-family.png" className="-rotate-45" />
                <img src="src/assets/s-key.png" className="rotate-12" />
            </div>
        </section>
    )
}

export default HeroSection