"use client"

import Link from "next/link"
import BlogPostSample from "@/app/blog/BlogPostSample"
import { useState } from "react"
import { PortableText, SanityDocument } from "next-sanity"

export default function BlogSampleResults({ posts }: { posts: SanityDocument[] }) {
  const [selectedPost, setSelectedPost] = useState<SanityDocument | null>(null)

  const handlePointerEnter = (post: SanityDocument) => {
    setSelectedPost(post)
  }

  return (
    <main className="w-full flex bg-slate-100 relative">
      <div className="flex flex-col w-full md:w-1/3 h-full">
        {posts.map(post => {
          return (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              onPointerEnter={() => handlePointerEnter(post)}
              className={`p-4 overflow-hidden ${selectedPost?._id === post._id ? "bg-slate-100" : "bg-slate-200"}`}
            >
              <BlogPostSample title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} />
            </Link>
          )
        })}
      </div>
      <div className="hidden md:block w-2/3">
        {selectedPost ? (
          <div className="sticky top-[4.5rem] p-10">
            <h1 className="text-4xl font-bold">{selectedPost?.title}</h1>
            <span className="text-sm my-4 inline-block text-black text-opacity-50">
              Published: {new Date(selectedPost.publishedAt).toLocaleDateString("en-CA")}
            </span>
            <div className="post-content flex flex-col gap-2">{Array.isArray(selectedPost?.body) && <PortableText value={selectedPost.body} />}</div>
          </div>
        ) : (
          <div className="text-center mt-80">Hover or select a post</div>
        )}
      </div>
    </main>
  )
}
