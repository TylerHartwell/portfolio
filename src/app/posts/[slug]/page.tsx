import { PortableText, type SanityDocument } from "next-sanity"
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import { client } from "@/sanity/client"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) => (projectId && dataset ? createImageUrlBuilder({ projectId, dataset }).image(source) : null)

const options = { next: { revalidate: 30 } }

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, params, options)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found."
    }
  }

  const title = post.title ? `${post.title} | Posts` : "Post"
  const description = `Read ${post.title ?? "this post"} from Tyler Hartwell.`
  const canonicalPath = `/posts/${params.slug}`

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
          alt: post.title ?? "Post"
        }
      ]
    }
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options)
  const postImageUrl = post.image ? urlFor(post.image)?.width(550).height(310).url() : null

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/posts" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && <Image src={postImageUrl} alt={post.title} className="aspect-video rounded-xl" width="550" height="310" />}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  )
}
