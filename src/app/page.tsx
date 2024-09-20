import Footer from "@/components/Footer"
import Header from "@/components/Header"
import RecentProject from "@/components/RecentProject"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* <div className="w-full h-8 bg-slate-400"></div> */}
      <Header />
      <main
        style={{
          backgroundImage: 'url("https://s.w.org/images/core/5.8/forest.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="bg-slate-50 text-yellow-300 relative flex-grow flex"
      >
        <div className="absolute w-full h-full bg-black opacity-60 "></div>
        <section id="home" className="relative mx-auto my-6 flex flex-col md:flex-row gap-6 md:justify-center items-start p-6  w-[90%] min-h-[80%]">
          <div className="flex flex-col self-start justify-start md:justify-between h-full max-h-[300px] md:max-h-[400px] min-h-min min-w-min items-center m-6 md:items-start md:flex-grow-0 md:max-w-[40%]">
            <h2 className="text-4xl md:text-6xl text-center md:text-left">Tyler Hartwell</h2>
            <ul className="flex flex-col items-center md:items-start gap-6 md:ml-12 my-6 text-nowrap">
              <li>
                <a href="https://github.com/TylerHartwell" className="underline">
                  github.com/TylerHartwell
                </a>
              </li>
              <li>tharwell37@gmail.com</li>
              <li>
                <a href="https://www.linkedin.com/in/tyler-hartwell/" className="underline ">
                  linkedin.com/in/tyler-hartwell
                </a>
              </li>
            </ul>
            <p className="text-xl w-auto italic">
              Hey, I&apos;m Tyler! I&apos;m a fullstack software developer creating useful and intuitive experiences.
            </p>
          </div>
          <div className="flex flex-col min-h-min items-center min-w-min md:flex-grow">
            <h1 className="text-3xl self-center py-2 text-stone-300 font-bold text-center ">Most Recent Projects</h1>
            <div className="flex flex-col gap-4">
              <RecentProject
                name="Put It On The List"
                url="https://putitonthelist.netlify.app/"
                src="https://tylerhartwell.com/wp-content/uploads/2024/05/putitonthelist_landscape.png"
              />
              <RecentProject name="Sudoku Ruler" url="https://sudoku.tylerhartwell.com/" src="/images/sudoku_ruler_screenshot.PNG" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
