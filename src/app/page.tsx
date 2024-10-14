import RecentProject from "@/components/RecentProject"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaFilePdf, FaArrowRight } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: 'url("/images/forest.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="bg-slate-50 text-yellow-300 relative flex-grow flex"
      >
        <div className="absolute w-full h-full bg-black opacity-60 "></div>
        <section
          id="home"
          className="relative mx-auto my-6 flex flex-col md:flex-row gap-12 md:gap-6 md:justify-center items-center md:items-start md:p-6  w-[90%] min-h-[80%]"
        >
          <div className="flex flex-col md:self-start gap-6 justify-start md:justify-between h-max  min-h-min min-w-min items-center m-6 md:items-start md:flex-grow-0 md:max-w-[40%]">
            <h2 className="text-4xl md:text-6xl text-center md:text-left">Tyler Hartwell</h2>
            <ul className="flex flex-col items-center md:items-start gap-6 md:ml-12 text-nowrap">
              <li>
                <a href="https://github.com/TylerHartwell" target="_blank" className="underline flex gap-2 items-center">
                  <FaGithub color="white" title="github icon" />
                  github.com/TylerHartwell
                </a>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <MdEmail color="white" title="email icon" />
                  tharwell37@gmail.com
                </div>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tyler-hartwell/" target="_blank" className="underline flex gap-2 items-center">
                  <FaLinkedin color="white" title="linkedin icon" />
                  linkedin.com/in/tyler-hartwell
                </a>
              </li>
            </ul>
            <p className="text-xl w-auto italic">
              Hey, I&apos;m Tyler! I&apos;m a fullstack software developer creating useful and intuitive experiences.
            </p>
            <div className="flex w-full justify-center">
              <a
                href="/pdfs/Tyler_Hartwell_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                Check out my Resume
                <FaArrowRight />
                <FaFilePdf color="white" title="pdf icon" />
              </a>
            </div>
          </div>
          <div className="flex flex-col min-h-min items-center min-w-min md:flex-grow">
            <h1 className="text-3xl self-center py-2 text-stone-300 font-bold text-center ">Most Recent Projects</h1>
            <div className="flex flex-col gap-4">
              <RecentProject
                name="Put It On The List"
                url="https://putitonthelist.netlify.app/"
                src="/images/putitonthelist_landscape.png"
                width={1092}
                height={757}
              />
              <RecentProject name="Sudoku Ruler" url="https://sudoku.tylerhartwell.com/" src="/images/sudoku_project.png" width={894} height={614} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
