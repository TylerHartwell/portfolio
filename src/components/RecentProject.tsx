import Image from "next/image"

export default function RecentProject({ name, url, src, width, height }: { name: string; url: string; src: string; width: number; height: number }) {
  return (
    <div className="flex items-center">
      <div className="w-[50%] min-w-[100px] max-w-[200px] sm:w-[200px] relative ">
        <a href={url} target="_blank">
          <Image
            src={src}
            alt="screenshot of project"
            title={`screenshot of ${name} project`}
            width={width}
            height={height}
            className="rounded-2xl max-w-full h-auto"
            priority
          />
        </a>
      </div>

      <a href={url} target="_blank" className="pl-4 text-2xl font-bold sm:text-4xl flex-1">
        {name}
      </a>
    </div>
  )
}
