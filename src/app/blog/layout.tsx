import BlogNav from "@/app/blog/BlogNav"
import "../globals.css"

export default function BlogLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col md:flex-row flex-grow md:mr-[200px]">
      <BlogNav />
      {children}
    </div>
  )
}
