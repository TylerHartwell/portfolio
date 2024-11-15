import Project from "@/app/projects/Project"
import { client } from "@/sanity/client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import { Fragment } from "react"

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(!defined(featuredPriority), featuredPriority desc, publishedAt desc)[0...12]{
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

export default async function Projects() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options)

  return (
    <>
      <main className="flex-grow flex flex-col bg-zinc-700">
        <section className="px-2 py-8 md:px-16 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-4">Projects</h2>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-x-4">
            {projects.map((project, index, array) => {
              const projectImage = project.image?.asset
              const { width, height } = projectImage.metadata?.dimensions || { width: 1080, height: 920 }
              const projectImageUrl = urlFor(project.image)?.width(width).height(height).url() || "/404"

              return (
                <Fragment key={index}>
                  <div className="row-span-2">
                    <Project
                      name={project.title}
                      url={project.url}
                      src={projectImageUrl}
                      desc={project.summary}
                      width={width}
                      height={height}
                      index={index}
                      length={array.length}
                      blogSlug={project.blogSlug}
                    />
                  </div>
                  {index == 0 && <div></div>}
                </Fragment>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
