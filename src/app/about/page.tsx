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
        <section className="p-8 bg-slate-100 flex-1 flex flex-col items-center">
          <h2 className="text-center text-3xl pb-8">About</h2>
          <p className="max-w-[1000px] indent-6">
            I&apos;m Tyler Hartwell, a fullstack software developer. I have a background in mechanical engineering and decided to make the transition
            into software engineering where I find more freedom to exercise creative problem solving and make effective and enjoyable user
            experiences. Here you can see some of the projects I&apos;ve worked on and learn about the problems I solved during their creation.
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
                  <span className="absolute group-hover:block top-[105%] left-full bg-black text-white text-sm rounded-lg rounded-tl-none px-2 whitespace-nowrap transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
