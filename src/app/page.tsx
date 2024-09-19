import Footer from "@/components/Footer"
import Header from "@/components/Header"
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
        <section
          id="home"
          className="relative mx-auto my-6 flex flex-col md:flex-row gap-6 justify-center items-center p-6  w-[90%] md:w-[80%] min-h-[80%] border-orange-600 border-2"
        >
          <div className="b1 flex flex-col justify-between h-full max-h-[400px] min-h-min min-w-min items-center md:items-start md:flex-grow-0 md:max-w-[40%]">
            <h2 className="b1 text-3xl md:text-6xl text-center md:text-left">Tyler Hartwell</h2>
            <ul className="b1 flex flex-col gap-6 md:ml-12 my-6 text-nowrap">
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
            <p className="b1 text-xl w-auto">
              Hey, I&apos;m Tyler! I&apos;m a fullstack software developer creating useful and intuitive experiences.
            </p>
          </div>
          <div className="b1 flex flex-col justify-between min-h-min  items-center min-w-min md:flex-grow">
            <h1 className="b1 text-3xl self-center py-2 text-stone-300 font-bold text-center mb-2">Most Recent Projects</h1>
            <div className="b1 flex flex-col gap-4 py-4">
              <div className="b1 flex items-center">
                <div className="w-[50%] sm:w-[200px] relative ">
                  <Image
                    src="https://tylerhartwell.com/wp-content/uploads/2024/05/putitonthelist_landscape.png"
                    alt="screenshot of project"
                    width={1092}
                    height={757}
                    className="rounded-2xl max-w-full h-auto"
                  />
                </div>

                <p className="b1 pl-4 text-2xl sm:text-4xl flex-1">Put It On The List more padding</p>
              </div>

              <div className="b1 flex items-center">
                <div className="w-[50%] sm:w-[200px] relative ">
                  <Image
                    src="https://tylerhartwell.com/wp-content/uploads/2024/05/putitonthelist_landscape.png"
                    alt="screenshot of project"
                    width={1092}
                    height={757}
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="rounded-2xl"
                  />
                </div>
                <p className="pl-4 text-2xl sm:text-4xl flex-1">Sudoku Ruler</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
