export default function TechMarquee() {
  const techStack = [
    { name: "React", color: "from-blue-50 to-blue-100 text-blue-700" },
    { name: "Next.js", color: "from-gray-50 to-gray-100 text-gray-900" },
    { name: "TypeScript", color: "from-blue-50 to-cyan-100 text-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-50 to-blue-100 text-cyan-700" },
    { name: "MongoDB", color: "from-green-50 to-emerald-100 text-green-700" },
    { name: "Supabase", color: "from-green-200 to-emerald-100 text-green-700" },
    { name: "Vercel", color: "from-gray-50 to-gray-100 text-gray-900" },
    { name: "Git", color: "from-orange-50 to-red-100 text-orange-700" },
    { name: "HTML/CSS", color: "from-amber-50 to-orange-100 text-amber-700" }
  ]

  return (
    <div className="w-full py-8">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Tech Stack</h3>
        <div className="flex-1 h-px bg-linear-to-r from-blue-200 to-transparent"></div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {techStack.map(tech => (
          <div
            key={tech.name}
            className={`bg-linear-to-br ${tech.color} size-20 rounded-lg font-medium text-sm flex items-center justify-center text-center transition-all duration-300 hover:scale-105 cursor-default border border-white/50 antialiased will-change-transform`}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}
