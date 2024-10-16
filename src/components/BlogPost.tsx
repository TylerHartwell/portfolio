import { PortableText, PortableTextBlock } from "next-sanity"

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
      <div>{Array.isArray(body) && <PortableText value={body} />}</div>
    </>
  )
}
