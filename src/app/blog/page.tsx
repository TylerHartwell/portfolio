import { type SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import BlogSampleResults from "./BlogSampleResults"

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`

const options = { next: { revalidate: 30 } }

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  return (
    <>
      <div className="w-full flex flex-col md:flew-row bg-zinc-700 flex-1">
        <BlogSampleResults posts={posts} />
      </div>
    </>
  )
}
