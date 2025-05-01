import Image from "next/image"
import { client } from "@/sanity/client"
import { SanityDocument } from "next-sanity"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from "@sanity/image-url"
import FeaturedProjects from "@/components/FeaturedProjects"
import IntroBlurb from "@/components/IntroBlurb"
import SocialLinks from "@/components/SocialLinks"
import TechMarquee from "@/components/TechMarquee"

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
      <main className="bg-slate-50 text-yellow-200 relative grow">
        <div className="absolute h-full w-full bg-black">
          <Image src="/images/forest.jpg" alt="bg-image" width={2560} height={1495} priority className="object-cover h-full w-full" />
        </div>
        <div className="absolute w-full h-full bg-black opacity-60 "></div>
        <section id="home" className="relative mx-auto my-6 flex flex-col  gap-6  items-center  w-[90%]">
          <div className="flex flex-col  gap-6 justify-start min-w-min items-center m-6 max-w-[500px]">
            <IntroBlurb />
            <TechMarquee />
            <SocialLinks />
          </div>
          <FeaturedProjects projects={projects} urlFor={urlFor} />
        </section>
      </main>
    </>
  )
}
