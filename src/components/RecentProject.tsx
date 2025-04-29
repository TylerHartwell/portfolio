import Image from "next/image"

export default function RecentProject({ name, url, src, width, height }: { name: string; url: string; src: string; width: number; height: number }) {
  return (
    <div className="flex items-center">
      <div className="w-[50%] min-w-[100px] border-2 border-transparent border-solid transition-all  max-w-[200px] sm:w-[200px] relative overflow-hidden hover:translate-y-[1px] hover:hover:border-yellow-200 rounded-2xl ">
        <a href={url} target="_blank">
          <Image
            src={src}
            alt="screenshot of project"
            title={`screenshot of ${name} project`}
            width={width}
            height={height}
            className="max-w-full h-auto"
            priority
          />
        </a>
      </div>

      <a href={url} target="_blank" className="pl-4 text-2xl font-bold sm:text-4xl flex-1 hover:underline hover:translate-y-[1px] transition-all">
        {name}
      </a>
    </div>
  )
}
