export default function BlogPost({ title, date, content }: { title: string; date: string; content: string }) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <span className="text-sm italic pl-4">{date}</span>
      <p>{content}</p>
    </div>
  )
}
