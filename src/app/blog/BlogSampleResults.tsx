"use client"

import Link from "next/link"
import BlogPostSample from "@/app/blog/BlogPostSample"
import { useEffect, useMemo, useRef, useState } from "react"
import { PortableText, SanityDocument } from "next-sanity"
import { useRouter } from "next/navigation"
import { BREAKPOINT_XS } from "@/utils/breakpoints"
import PaginationControls from "@/components/PaginationControls"

export default function BlogSampleResults({ posts = [], perPage = 8 }: { posts?: SanityDocument[]; perPage?: number }) {
  const router = useRouter()
  const [selectedPost, setSelectedPost] = useState<SanityDocument | null>(posts[0])
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [pointerStartX, setPointerStartX] = useState(0)
  const [pointerStartY, setPointerStartY] = useState(0)

  const scrollableRef = useRef<HTMLDivElement>(null)

  const isHoverDevice = useRef<boolean>(false)
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    const checkIsNarrow = () => {
      setIsNarrow(window.innerWidth < BREAKPOINT_XS)
    }

    checkIsNarrow()

    window.addEventListener("resize", checkIsNarrow)

    return () => {
      window.removeEventListener("resize", checkIsNarrow)
    }
  }, [])

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

  const handleSelectPost = (post: SanityDocument) => {
    if (selectedPost?._id !== post._id) {
      setSelectedPost(post)
      resetScroll()
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setPointerStartX(e.clientX)
    setPointerStartY(e.clientY)
    setIsDragging(false)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (Math.abs(e.clientX - pointerStartX) > 5 || Math.abs(e.clientY - pointerStartY) > 5) {
      setIsDragging(true)
    }
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLAnchorElement>, post: SanityDocument, href: string, isSelected: boolean) => {
    if (isDragging) {
      return
    }
    if (e.pointerType === "touch") {
      if (isSelected || isNarrow) {
        router.push(href)
      } else {
        handleSelectPost(post)
      }
    } else {
      if (e.button === 0) {
        router.push(href)
      }
    }
  }

  const handlePointerEnter = (e: React.PointerEvent<HTMLAnchorElement>, post: SanityDocument) => {
    e.preventDefault()
    if (isHoverDevice.current && e.pointerType !== "touch") {
      handleSelectPost(post)
      setHoveredPost(post._id)
    }
  }

  const handlePointerLeave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isHoverDevice.current && e.pointerType !== "touch") {
      setHoveredPost(null)
    }
  }

  return (
    <main className="w-full flex flex-col xs:flex-row bg-slate-100 relative  flex-1">
      <div className="flex flex-col w-full xs:w-auto flex-1 bg-slate-100">
        {totalPages > 1 && (
          <PaginationControls currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        )}
        {paginatedPosts.map(post => {
          const isSelected = selectedPost?._id === post._id
          const href = `/blog/${post.slug.current}`
          const isHovered = isHoverDevice.current && hoveredPost === post._id

          const highlight = isHovered || (isSelected && !isNarrow)

          return (
            <Link
              href={href}
              key={post._id}
              onClick={handleClick}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={e => handlePointerUp(e, post, href, isSelected)}
              onPointerEnter={e => handlePointerEnter(e, post)}
              onPointerLeave={handlePointerLeave}
              className={`my-1 p-4 overflow-hidden active:bg-slate-100  ${highlight ? "bg-slate-100" : "bg-slate-200"}`}
            >
              <BlogPostSample title={post.title} date={new Date(post.publishedAt).toLocaleDateString("en-CA")} />
            </Link>
          )
        })}
        <div className="bg-slate-200 w-full relative flex-1"></div>
        {totalPages > 1 && (
          <PaginationControls currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        )}
      </div>

      <div className="hidden xs:flex w-2/3 relative">
        {selectedPost ? (
          <div
            className="w-full sticky self-start overflow-y-auto top-[var(--dynamic-header-height)] max-h-[calc(100vh-var(--dynamic-header-height))]"
            ref={scrollableRef}
          >
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
