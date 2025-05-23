import Image from "next/image"

export default function Project({
  name,
  url,
  src,
  desc,
  width,
  height,
  index,
  length,
  blogSlug
}: {
  name: string
  url: string
  src: string
  desc: string
  width: number
  height: number
  index: number
  length: number
  blogSlug: string
}) {
  const blogURL = `/blog/${blogSlug}`
  return (
    <div className="flex flex-col gap-4 py-4">
      <hr className="border-zinc-900 " />
      <a href={blogURL} target="_blank" className="text-2xl font-bold sm:text-4xl flex-1 text-center">
        {name}
      </a>
      <p>{desc}</p>
      {blogSlug && (
        <span className="mx-auto">
          See blog post{" "}
          <a href={blogURL} className="hover:text-green-500 active:text-purple-600 underline">
            here
          </a>
        </span>
      )}

      <div className="relative ">
        <a href={url} target="_blank">
          <Image src={src} alt="screenshot of project" width={width} height={height} className="rounded-2xl max-w-full h-auto" priority />
        </a>
      </div>
      {index >= length - 2 && <hr className="border-zinc-900 hidden sm:block" />}
    </div>
  )
}
