"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Header() {
  const pathname = usePathname()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  const isActive = (path: string) => (pathname === path ? "text-blue-500 underline underline-offset-4" : "text-gray-500")

  return (
    <header className="sticky top-0 w-full h-[5.5rem] bg-[var(--background)] z-50 flex justify-center">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-nowrap sm:w-[90%] min-w-min max-w-full sm:gap-4">
        <div className="flex flex-col justify-center max-h-min ">
          <span className="sm:text-4xl font-bold">Tyler Hartwell</span>
          <span className="text-sm hidden sm:inline">Fullstack Software Developer</span>
        </div>
        <div className="flex gap-8 items-center justify-around">
          <Link href="/" scroll={false} className={`${isActive("/")} hover:text-blue-700`}>
            Home
          </Link>
          <Link href="/projects" scroll={false} className={`${isActive("/projects")} hover:text-blue-700`}>
            Projects
          </Link>
          <Link href="/blog" scroll={false} className={`${isActive("/blog")} hover:text-blue-700`}>
            Blog
          </Link>
          <Link href="/about" scroll={false} className={`${isActive("/about")} hover:text-blue-700`}>
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
