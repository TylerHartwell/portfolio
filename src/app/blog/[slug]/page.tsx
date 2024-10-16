import { type SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import Link from "next/link"
import BlogPost from "@/components/BlogPost"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`

const options = { next: { revalidate: 30 } }

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options)

  return (
    <>
      <main className="mx-auto  p-8 flex flex-col gap-4 flex-grow bg-slate-100">
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
        <BlogPost title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} body={post.body} />
      </main>
    </>
  )
}
