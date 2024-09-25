import Image from "next/image"

export default function Project({ name, url, src, desc }: { name: string; url: string; src: string; desc: string }) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <hr className="border-zinc-900" />
      <a href={url} target="_blank" className="text-2xl font-bold sm:text-4xl flex-1 text-center">
        {name}
      </a>
      <p>{desc}</p>
      <div className="relative ">
        <a href={url} target="_blank">
          <Image src={src} alt="screenshot of project" width={1092} height={757} className="rounded-2xl max-w-full h-auto" priority />
        </a>
      </div>
      <hr className="border-zinc-900" />
    </div>
  )
}
