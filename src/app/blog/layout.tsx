import BlogNav from "@/components/BlogNav"
import "../globals.css"

export default function BlogLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-grow md:mr-[200px]">
      {children}
      <BlogNav />
    </div>
  )
}
