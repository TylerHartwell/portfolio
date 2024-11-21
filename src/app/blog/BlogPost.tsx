import { PortableTextBlock } from "next-sanity"
import PostContent from "./PostContent"

interface Props {
  title: string
  date: string
  body: PortableTextBlock[]
}

export default function BlogPost({ title, date, body }: Props) {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm">Published: {date}</p>
      <div className="post-content">
        <PostContent body={body} />
      </div>
    </>
  )
}
