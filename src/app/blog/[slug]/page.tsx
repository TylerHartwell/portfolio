import { type SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import Link from "next/link"
import BlogPost from "@/app/blog/BlogPost"
import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`

const options = { next: { revalidate: 30 } }

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, params, options)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found."
    }
  }

  const title = post.title ? `${post.title} | Blog` : "Blog Post"
  const description = `Read ${post.title ?? "this post"} on Tyler Hartwell's developer blog.`
  const canonicalPath = `/blog/${params.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title,
      description,
      publishedTime: post.publishedAt,
      images: [
        {
          url: toAbsoluteUrl("/images/forest.jpg"),
          width: 1200,
          height: 630,
          alt: post.title ?? "Blog post"
        }
      ]
    }
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options)

  return (
    <>
      <main className="mx-auto  p-8 flex flex-col gap-4 grow bg-slate-100">
        <Link href="/blog" className="w-max self-center hover:underline">
          ← Back to posts
        </Link>
        <BlogPost title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} body={post.body} />
      </main>
    </>
  )
}
