"use client"

import Link from "next/link"
import BlogPostSample from "@/app/blog/BlogPostSample"
import { useMemo, useRef, useState } from "react"
import { PortableText, SanityDocument } from "next-sanity"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function BlogSampleResults({ posts = [], perPage = 5 }: { posts?: SanityDocument[]; perPage?: number }) {
  const [selectedPost, setSelectedPost] = useState<SanityDocument | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const scrollableRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0 // Reset scroll position to the top
    }
  }

  const totalPages = Math.max(1, Math.ceil((posts?.length ?? 0) / perPage))

  const paginatedPosts = useMemo(() => {
    if (!posts) return []
    const startIndex = (currentPage - 1) * perPage
    return posts.slice(startIndex, startIndex + perPage)
  }, [posts, currentPage, perPage])

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const handlePointerEnter = (post: SanityDocument) => {
    if (selectedPost?._id !== post._id) {
      setSelectedPost(post)
      resetScroll()
    }
  }

  return (
    <main className="w-full flex flex-col md:flex-row bg-slate-100 relative h-full flex-1">
      <div className=" flex flex-col w-full md:w-1/3 min-h-fit h-full  flex-1 md:flex-initial bg-slate-100">
        {paginatedPosts.map(post => (
          <Link
            href={`/blog/${post.slug.current}`}
            key={post._id}
            onPointerEnter={() => handlePointerEnter(post)}
            className={`my-1 p-4 overflow-hidden ${selectedPost?._id === post._id ? "bg-slate-100" : "bg-slate-200"}`}
          >
            <BlogPostSample title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} />
          </Link>
        ))}
        <div className="bg-slate-200 w-full flex-1"></div>
        {totalPages > 1 && (
          <div className=" flex justify-between items-center mt-auto bg-slate-200 border-slate-300 border-2">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="flex-1">
              <FaChevronLeft className={`h-10 w-10 ${currentPage === 1 && "text-gray-400"}`} />
            </button>
            <span className="p-4">{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="flex-1 flex justify-end">
              <FaChevronRight className={`h-10 w-10 ${currentPage === totalPages && "text-gray-400"}`} />
            </button>
          </div>
        )}
      </div>

      <div className="hidden  w-2/3  md:flex flex-col overflow-y-auto h-full grow-0 absolute left-1/3" ref={scrollableRef}>
        {selectedPost ? (
          <div className=" py-10 px-6">
            <h1 className="text-4xl font-bold">{selectedPost?.title}</h1>
            <span className="text-sm my-4 inline-block text-black text-opacity-50">
              Published: {new Date(selectedPost.publishedAt).toLocaleDateString("en-CA")}
            </span>
            <div className="flex flex-col gap-2 indent-8">{Array.isArray(selectedPost?.body) && <PortableText value={selectedPost.body} />}</div>
          </div>
        ) : (
          <div className="text-center mt-80">Hover or select a post</div>
        )}
      </div>
    </main>
  )
}
