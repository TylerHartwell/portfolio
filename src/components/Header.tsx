"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export default function Header() {
  const pathname = usePathname()

  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight
        document.documentElement.style.setProperty("--dynamic-header-height", `${headerHeight}px`)
      }
    }

    updateHeaderHeight()

    window.addEventListener("resize", updateHeaderHeight)

    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  const isActive = (path: string) => (pathname === path ? "text-blue-500 underline underline-offset-4" : "text-gray-500")

  const techStack = ["React", "Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Vercel"]

  return (
    <header ref={headerRef} className="sticky top-0 w-full bg-[var(--background)] z-50 flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-nowrap sm:w-[90%] min-w-min max-w-full sm:gap-4 py-2 mb-4">
        <div className="flex flex-col justify-center">
          <span className="sm:text-4xl font-bold">Tyler Hartwell</span>
          <span className="text-sm hidden sm:inline">Fullstack Software Developer</span>
        </div>

        <div className="flex gap-4 items-center justify-around">
          <Link href="/" scroll={false} className={`${isActive("/")} hover:text-blue-700`}>
            Home
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/projects" scroll={false} className={`${isActive("/projects")} hover:text-blue-700`}>
            Projects
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/blog" scroll={false} className={`${isActive("/blog")} hover:text-blue-700`}>
            Blog
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/about" scroll={false} className={`${isActive("/about")} hover:text-blue-700`}>
            About
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 max-w-full w-max flex overflow-x-hidden [mask-image:linear-gradient(to_right,_transparent,_black_15%,_black_85%,_transparent_100%)]">
        <div className="animate-marquee whitespace-nowrap">
          {techStack.map((tech, index) => (
            <span key={index} className="mx-2">
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          {techStack.map((tech, index) => (
            <span key={index} className="mx-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
