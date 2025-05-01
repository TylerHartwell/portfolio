import Image from "next/image"

export default function RecentProject({ name, url, src, width, height }: { name: string; url: string; src: string; width: number; height: number }) {
  return (
    <div className="grid grid-cols-[minmax(min-content,1fr)_1fr] items-center">
      <div className="w-full min-w-[100px] border-transparent border-solid transition-all  max-w-[400px] relative overflow-hidden hover:translate-y-[1px] hover:hover:border-yellow-200 rounded-2xl ">
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
      <div className="flex flex-col justify-end h-full">
        <a
          href={url}
          target="_blank"
          className="flex-1 text-2xl grid place-items-center font-bold hover:underline hover:translate-y-[1px] transition-all"
        >
          {name}
        </a>
        <a href={url} target="_blank" className=" underline self-center">
          Project Overview
        </a>
        <p className=" self-center">Typescript, React, Next.js</p>
      </div>
    </div>
  )
}
