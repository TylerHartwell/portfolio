"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => (pathname === path ? "text-blue-500" : "text-gray-500")

  return (
    <header className="border-cyan-400 border-4 sticky top-0 w-full h-[5.5rem] bg-[var(--background)] z-50 flex justify-center">
      <div className="b1 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-nowrap sm:w-[90%] min-w-min max-w-full sm:gap-4">
        <div className="flex flex-col justify-center max-h-min ">
          <span className="sm:text-4xl font-bold">Tyler Hartwell</span>
          <span className="text-sm hidden sm:inline">Fullstack Software Developer</span>
        </div>
        <div className="b1 flex gap-8 items-center justify-around">
          <Link href="/" className={`${isActive("/")} hover:text-blue-700`}>
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-700">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-blue-700">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-700">
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
