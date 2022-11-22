import { useState } from 'react'

function App() {
  return (
    <main className="flex-col h-auto bg-slate-800 text-white">
      <header className="fixed z-20 backdrop-blur-sm flex justify-end bg-slate-700/10 py-3 px-4 w-full">
        <nav>
          <ul className="flex gap-5 text-xl mr-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About me</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Touch me</li>
          </ul>
        </nav>
      </header>
      <section className="h-screen overflow-hidden relative flex justify-center items-center">
        <div className="absolute top-20 right-0 h-24 w-36 rotate-12">
          <img src="src/assets/rd.png" />
        </div>
        <div className="absolute top-16 left-10 h-24 w-36 rotate-12">
          <img src="src/assets/programación.png" />
        </div>
        <div className="absolute inset-x-4 bottom-4 h-24 w-36 rotate-12">
          <img src="src/assets/datos.png" />
        </div>
        <div className="absolute bottom-6 right-0 h-24 w-24 -rotate-45">
          <img src="src/assets/hand1.png" />
        </div>

        <div className="absolute bottom-5 mr-10 gap-2 flex h-24 w-24">
          <img src="src/assets/stark.png" className="-rotate-45" />
          <img src="src/assets/s-key.png" className="rotate-12" />
        </div>

        <div className="text-center">
          <h1 className="md:text-6xl text-4xl md:font-semibold font-bold border-b-2 border-white/20 mb-2">Samuel de la Cruz G.</h1>
          <h5 className="md:text-3xl text-2xl font-medium">Software / Front-End Developer</h5>
        </div>
      </section>
      <section className="h-screen gap-10 bg-slate-500/20 p-5 mt-5 items-center justify-center flex md:flex-row flex-col">
        <div>
          <h2 className="md:text-6xl text-3xl font-medium mb-3 border-b-2 border-white/20">Skills</h2>
          <div className="flex gap-14 ml-5">
            <ul className="list-disc">
              <li>HTML5 / CSS3</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS </li>
              <li>JavaScript ( ES6+) </li>
              <li>React.Js ( Next.js ) </li>
              <li>TypeScript </li>
            </ul>
            <ul  className="list-disc">
              <li>Vue.Js (2 and 3) </li>
              <li>Node.Js</li>
              <li>Redux </li>
              <li>SQL ( MySQL, Postgres) </li>
              <li>API Design Knowledge</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex">
            <div className="w-24 h-24">
              <img src="src/assets/martillo.png" className="hover:-rotate-6 duration-75" />
            </div>
            <div className="w-24 h-24 rotate-6 hover:-rotate-12 duration-100">
              <img src="src/assets/bug.png" />
            </div>
          </div>

          <div className="w-24 h-24 mt-3 -rotate-12 hover:rotate-12 hover:scale-[1.04] duration-75">
            <img src="src/assets/iron-man.png" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
