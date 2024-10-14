export default function BlogPostSample({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <span className="text-sm italic pl-4">{date}</span>
    </div>
  )
}
