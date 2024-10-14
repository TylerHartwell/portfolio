import Image from "next/image"

export default function BlogNav() {
  return (
    <aside className="relative bg-neutral-200 w-full md:w-[200px] h-24 md:h-auto">
      <Image
        src="/images/forest.jpg"
        alt="Forest background"
        className="object-cover"
        fill={true}
        priority
        sizes="(max-width: 768px) 300px, 1000px"
      />
      <div className="relative z-10 w-full h-full flex md:flex-col justify-center md:justify-start items-center py-4 bg-transparent gap-6">
        <div className="flex flex-col md:flex-row w-min p-1 place-items-center gap-1 bg-opacity-20">
          <input name="search" type="text" size={8} className="h-min px-1" />
          <button className="bg-amber-300 rounded-full px-2 font-bold hover:bg-amber-400 border-[1px] border-black border-opacity-30">Search</button>
        </div>
        <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
          <span>Recent</span>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              <span className="w-2 h-2 mr-2 bg-black flex-shrink-0 transform rotate-45" />
              <a href="/blog" className="underline text-sm font-bold">
                Sample Blog Post
              </a>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 mr-2 bg-black flex-shrink-0 transform rotate-45" />
              <a href="/blog" className="underline text-sm font-bold">
                Lessons from Sudoku Project
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
          <span>Categories</span>
          <ul className="flex flex-col gap-2 text-center place-items-center">
            <li className="flex items-center">
              <a href="/blog" className="underline text-sm font-bold">
                Project Detail
              </a>
            </li>
            <li className="flex items-center">
              <a href="/blog" className="underline text-sm font-bold">
                Tooling
              </a>
            </li>
            <li className="flex items-center">
              <a href="/blog" className="underline text-sm font-bold">
                Reflections
              </a>
            </li>
            <li className="flex items-center">
              <a href="/blog" className="underline text-sm font-bold">
                Misc.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
