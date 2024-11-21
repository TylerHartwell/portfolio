import { PortableText, PortableTextBlock } from "next-sanity"

interface PostContentProps {
  body: PortableTextBlock[]
}

export default function PostContent({ body }: PostContentProps) {
  if (!Array.isArray(body)) return null

  return (
    <PortableText
      value={body}
      components={{
        types: {},
        marks: {
          link: ({ value, children }) => {
            const href = value?.href || "#"
            return (
              <a href={href} target="_blank">
                {children}
              </a>
            )
          }
        }
      }}
    />
  )
}
