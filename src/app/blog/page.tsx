import BlogPost from "@/components/BlogPost"
import ScrollToTop from "@/components/ScrollToTop"
import { type SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import Link from "next/link"

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

const options = { next: { revalidate: 30 } }

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
  return (
    <>
      <div className="flex-grow flex flex-col bg-zinc-700">
        <div className="flex flex-col-reverse md:flex-row flex-1 bg-slate-100">
          <main className="p-8 flex-1 flex flex-col gap-8">
            {posts.map(post => (
              <Link href={`/blog/${post.slug.current}`} key={post._id}>
                <BlogPost title={post.title} date={new Date(post.publishedAt).toLocaleDateString()} />
              </Link>
            ))}
          </main>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}
