import RecentProject from "@/components/RecentProject"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaFilePdf, FaArrowRight } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Image from "next/image"
import forest from "/public/images/forest.jpg"
import { client } from "@/sanity/client"
import { SanityDocument } from "next-sanity"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from "@sanity/image-url"

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(!defined(featuredPriority), featuredPriority desc, publishedAt desc)[0...3]{
  _id,
  title,
  summary,
  url,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  publishedAt,
  blogSlug,
  featuredPriority
}`

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) => (projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null)

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options)

  return (
    <>
      <main className="bg-slate-50 text-yellow-300 relative grow">
        <div className="absolute h-full w-full bg-black">
          <Image src={forest} alt="bg-image" width={2560} height={1495} priority className="object-cover h-full w-full" />
        </div>
        <div className="absolute w-full h-full bg-black opacity-60 "></div>
        <section
          id="home"
          className="relative mx-auto my-6 flex flex-col md:flex-row gap-6 md:justify-center items-center md:items-start md:p-6 w-[90%]"
        >
          <div className="flex flex-col md:self-start gap-6 justify-start md:justify-between min-w-min items-center m-6 md:items-start md:grow-0 md:max-w-[40%]">
            <h2 className="text-4xl md:text-6xl text-center md:text-left">Tyler Hartwell</h2>
            <ul className="flex flex-col items-center md:items-start gap-6 md:ml-12 text-nowrap">
              <li>
                <a href="https://github.com/TylerHartwell" target="_blank" className="underline flex gap-2 items-center">
                  <FaGithub color="white" title="github icon" />
                  github.com/TylerHartwell
                </a>
              </li>
              <li>
                <a href="mailto:thartwell37@gmail.com" target="_blank" className="underline flex gap-2 items-center">
                  <MdEmail color="white" title="email icon" />
                  tharwell37@gmail.com
                </a>
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
              <a href="/pdfs/Tyler_Hartwell_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                Check out my Resume
                <FaArrowRight />
                <FaFilePdf color="white" title="pdf icon" />
              </a>
            </div>
          </div>
          <div className="flex flex-col  items-center min-w-min md:grow">
            <h1 className="text-3xl self-center py-2 text-stone-300 font-bold text-center ">Featured Projects</h1>
            <div className="flex flex-col gap-4">
              {projects.map(project => {
                const projectImage = project.image?.asset
                const { width, height } = projectImage.metadata?.dimensions || { width: 1080, height: 920 }
                const projectImageUrl = urlFor(project.image)?.width(width).height(height).url() || "/404"

                return <RecentProject key={project._id} name={project.title} url={project.url} src={projectImageUrl} width={width} height={height} />
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
