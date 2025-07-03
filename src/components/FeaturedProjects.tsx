import { SanityDocument } from "next-sanity"
import RecentProject from "./RecentProject"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

interface Props {
  projects: SanityDocument[]
  urlFor: (source: SanityImageSource) => ImageUrlBuilder | null
}

export default function FeaturedProjects({ projects, urlFor }: Props) {
  return (
    <div className="flex flex-col  items-center min-w-min">
      <h1 className="text-3xl self-center py-2 text-stone-300 font-bold text-center ">Featured Projects</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map(project => {
          const projectImage = project.image?.asset
          const { width, height } = projectImage.metadata?.dimensions || { width: 1080, height: 920 }
          const projectImageUrl = urlFor(project.image)?.width(width).height(height).url() || "/404"
          const blogURL = `/blog/${project.blogSlug}`

          return (
            <RecentProject
              key={project._id}
              name={project.title}
              brief={project.brief}
              url={project.url}
              src={projectImageUrl}
              width={width}
              height={height}
              blogURL={blogURL}
            />
          )
        })}
      </div>
    </div>
  )
}
