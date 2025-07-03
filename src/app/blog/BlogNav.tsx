import { client } from "@/sanity/client"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...3]{_id, title, slug}`

const options = { next: { revalidate: 30 } }

export default async function BlogNav() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  return (
    <aside className="relative bg-neutral-200 w-full md:w-[200px]">
      <div className="absolute h-full w-full">
        <Image
          src="/images/forest.jpg"
          alt="bg-image"
          width={2560}
          height={1495}
          priority
          sizes="(max-width: 768px) 300px, 1000px"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="relative z-10 w-full flex md:flex-col justify-center md:justify-start items-center py-4 bg-transparent gap-6">
        {/* <div className="flex flex-col md:flex-row w-min p-1 place-items-center gap-1 bg-opacity-20">
          <input name="search" type="text" size={8} className="px-1" />
          <button className="bg-amber-300 rounded-full px-2 font-bold hover:bg-amber-400 border-[1px] border-black border-opacity-30">Search</button>
        </div> */}
        <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
          <span>Recent</span>
          <ul className="flex flex-col gap-2">
            {posts.map(post => {
              const href = `/blog/${post.slug.current}`

              return (
                <li key={post._id} className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-black shrink-0 transform rotate-45" />
                  <Link href={href} className="underline text-sm font-bold">
                    {post.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
          <span>Categories</span>
          <ul className="flex flex-col gap-2 text-center place-items-center">
            <li className="flex items-center">
              <Link href="/blog" className="underline text-sm font-bold">
                Project Detail
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/blog" className="underline text-sm font-bold">
                Tooling
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/blog" className="underline text-sm font-bold">
                Reflections
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/blog" className="underline text-sm font-bold">
                Misc.
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
  )
}
