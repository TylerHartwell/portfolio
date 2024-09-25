import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { FaReact, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { TiHtml5 } from "react-icons/ti"
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri"
import { SiExpress, SiJavascript } from "react-icons/si"

const techIcons = [
  { component: FaGitAlt, title: "Git Version Control" },
  { component: TiHtml5, title: "HTML" },
  { component: FaCss3Alt, title: "CSS" },
  { component: SiJavascript, title: "JavaScript" },
  { component: FaReact, title: "React" },
  { component: RiTailwindCssFill, title: "Tailwind" },
  { component: RiNextjsFill, title: "Next.js" },
  { component: SiExpress, title: "Express.js" }
]

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <section className="p-8 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-8">About</h2>
          <p>
            I&apos;m Tyler Hartwell, a fullstack software developer. I earned my degree in mechanical engineering and decided to make the transition
            into the software engineering field where I find more freedom to exercise creative problem solving and make effective and enjoyable user
            experiences. This site is just a simple avenue to display some of the projects I&apos;ve worked on. It&apos;s currently being used as an
            explorative development sandbox and is likely to be in a perpetually unfinished or broken state as I continuously learn different
            technologies, platforms, and methodologies.
          </p>
        </section>
        <section className="p-8 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-8">Technologies</h2>
          <div className="grid grid-cols-4 gap-8 place-items-center max-w-fit mx-auto">
            {techIcons.map((icon, index) => {
              const IconComponent = icon.component

              return (
                <span key={index} className="relative flex place-items-center w-max group">
                  <IconComponent size="3em" />
                  <span className="absolute group-hover:block top-[105%] left-full bg-black text-white rounded-lg rounded-tl-none px-2 whitespace-nowrap transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {icon.title}
                  </span>
                </span>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
