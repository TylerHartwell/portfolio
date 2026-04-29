import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
]

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-(--background) z-50 flex flex-col justify-center items-center text-sm sm:text-lg border-b border-gray-200">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-nowrap sm:w-[90%] min-w-min max-w-full sm:gap-4 py-3">
        <div className="flex flex-col justify-center">
          <span className="sm:text-4xl font-bold">Tyler Hartwell</span>
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">Fullstack Software Developer</span>
        </div>

        <nav className="flex gap-4 items-center justify-around">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center gap-4">
              <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
              {index < navItems.length - 1 && <span className="opacity-20">|</span>}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
