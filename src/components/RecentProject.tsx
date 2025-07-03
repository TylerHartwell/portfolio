import Image from "next/image"
import Link from "next/link"

export default function RecentProject({
  name,
  brief,
  url,
  src,
  width,
  height,
  blogURL
}: {
  name: string
  brief: string
  url: string
  src: string
  width: number
  height: number
  blogURL: string
}) {
  return (
    <div className="grid grid-cols-[minmax(min-content,1fr)_1fr] items-stretch">
      <div className="w-full min-w-[100px] border-transparent border-solid border-2 transition-all flex flex-col justify-center max-w-[400px] relative overflow-hidden hover:scale-105 hover:border-yellow-200 rounded-2xl bg-black">
        <a href={url} target="_blank">
          <Image
            src={src}
            alt="screenshot of project"
            title={`screenshot of ${name} project`}
            width={width}
            height={height}
            className="object-cover"
            priority
          />
        </a>
      </div>
      <div className="flex flex-col justify-end gap-2 h-full">
        <div className="flex-1 @container flex flex-col justify-center">
          <a
            href={url}
            target="_blank"
            className="text-[calc(100cqw/8)] grid place-items-center self-start font-bold hover:underline underline-offset-3 hover:opacity-90 ml-4 leading-none"
          >
            {name}
          </a>
        </div>
        <p className="self-center text-center text-sm">{brief}</p>
        <Link href={blogURL} className="text-sm underline self-center hover:opacity-90">
          Project Overview
        </Link>
      </div>
    </div>
  )
}
