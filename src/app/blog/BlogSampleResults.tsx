"use client"

import Link from "next/link"
import BlogPostSample from "@/app/blog/BlogPostSample"
import { useEffect, useMemo, useRef, useState } from "react"
import { PortableText, SanityDocument } from "next-sanity"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function BlogSampleResults({ posts = [], perPage = 8 }: { posts?: SanityDocument[]; perPage?: number }) {
  const router = useRouter()
  const [selectedPost, setSelectedPost] = useState<SanityDocument | null>(posts[0])
  const [currentPage, setCurrentPage] = useState(1)

  const scrollableRef = useRef<HTMLDivElement>(null)

  const isHoverDevice = useRef<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hoverMatchMedia = window.matchMedia("(hover: none)")
      isHoverDevice.current = !hoverMatchMedia.matches
    }
  }, [])

  const resetScroll = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0
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
    <main className="w-full flex flex-col xs:flex-row bg-slate-100 relative h-full flex-1">
      <div className="flex flex-col w-full xs:w-auto min-h-fit h-full  flex-1  bg-slate-100">
        {paginatedPosts.map(post => {
          const isSelected = selectedPost?._id === post._id
          const href = `/blog/${post.slug.current}`

          return (
            <Link
              href={href}
              key={post._id}
              onClick={e => {
                const isExtraSmallScreen = window.innerWidth < 460
                if (!isHoverDevice.current) {
                  e.preventDefault()
                  if (!isSelected && !isExtraSmallScreen) {
                    handlePointerEnter(post)
                  } else {
                    router.push(href)
                  }
                }
              }}
              onPointerEnter={e => {
                e.preventDefault()
                if (isHoverDevice.current && (e.pointerType == "mouse" || e.pointerType == "pen")) {
                  handlePointerEnter(post)
                }
              }}
              className={`my-1 p-4 overflow-hidden bg-slate-200 hover:bg-slate-100 ${isSelected && "xs:bg-slate-100"}`}
            >
              <BlogPostSample title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} />
            </Link>
          )
        })}
        <div className="bg-slate-200 w-full relative flex-1"></div>
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-auto bg-slate-200 border-slate-300 border-2 sticky top-[200px]">
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

      <div className="hidden xs:flex w-2/3 h-full relative ">
        {selectedPost ? (
          <div className="w-full sticky self-start top-[4.5rem] overflow-y-auto max-h-[calc(100vh-4.5rem)]" ref={scrollableRef}>
            <h1 className="pl-2 pt-2 text-4xl font-bold">{selectedPost?.title}</h1>
            <span className="pl-2 text-sm my-4 inline-block text-black text-opacity-50">
              Published: {new Date(selectedPost.publishedAt).toLocaleDateString("en-CA")}
            </span>
            <div className="post-content flex flex-col gap-2 indent-8 pb-2 overflow-hidden">
              {Array.isArray(selectedPost?.body) && <PortableText value={selectedPost.body} />}
            </div>
          </div>
        ) : (
          <div className="text-center m-auto">No post selected for preview</div>
        )}
      </div>
    </main>
  )
}
